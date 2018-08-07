
const sequelize = require("sequelize");
const nodemailer = require("nodemailer");

const Consumer = require("../db/models").consumer;
var env = process.env.NODE_ENV || 'development';
var config = require("../config/config")[env];

module.exports = function() {
    Consumer.findAll({ 
        raw: true,
        attributes: [
            'name',
            'msisdn',
            'location',
            'address',
            'region',
            'franchiseId',
            'channelType',
            'bmSerialNum',
            'siebelUser',
            'province',
            'cnic',
            'city',
            'nearestLandmark',
            'mbu',
            [sequelize.literal("latitude || ',' || longitude"), 'latLng']
        ],
        where: {
            emailed: false
        }
    }).then(consumers => {
        const createCsvWriter = require('csv-writer').createObjectCsvWriter;
        const csvWriter = createCsvWriter({
            path: 'temp/consumers.csv',
            header: [
                { id: 'id', title: 'POS_ID' },
                { id: 'name', title: 'NAME' },
                { id: 'msisdn', title: 'MSISDN' },
                { id: 'location', title: 'LOCATION' },
                { id: 'address', title: 'ADDRESS' },
                { id: 'region', title: 'REGION' },
                { id: 'franchiseId', title: 'FRANCHISEID' },
                { id: 'channelType', title: 'CHANNEL_TYPE' },
                { id: 'bmSerialNum', title: 'BM_SERIAL_NUM' },
                { id: 'siebelUser', title: 'SIEBEL_USER' },
                { id: 'province', title: 'PROVINCE' },
                { id: 'cnic', title: 'CNIC' },
                { id: 'city', title: 'CITY' },
                { id: 'nearestLandmark', title: 'NEAREST_LANDMARK' },
                { id: 'mbu', title: 'MBU' },
                { id: 'latLng', title: 'LAT_LONG' },
            ]
        });
        csvWriter.writeRecords(consumers).then(() => {
            
            let transporter = nodemailer.createTransport({
                service: 'gmail.com',
                auth: {
                    user: 'aftabaig@gmail.com',
                    pass: 'qicutbrtkdclbwkx'
                }
            });
        
            let options = {
                from : config.mail.from,
                to: config.mail.to.join(','),
                cc: config.mail.cc.join(','),
                subject: config.mail.subject,
                html: config.mail.html,
                attachments: [
                    {
                        filename: config.mail.fileName,
                        path: 'temp/consumers.csv'
                    }
                ]
            };
        
            transporter.sendMail(options, (error, info) => {
                if (error == null) {
                    console.log("Email sent.");
                }
            });
    
            Consumer.update(
                { emailed: true }, 
                { where: { emailed: false }}
            ).then(result => {
            }).catch(error =>  {
                console.log("Error")
            })
                
        })
    });
}
