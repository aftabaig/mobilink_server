const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

var bcrypt = require("bcrypt-nodejs");
const cors = require("cors");

const schedule = require("node-schedule");
var job = require("./src/jobs/dailyEmail");
const notifier = require("mail-notifier");

const { graphqlExpress, graphiqlExpress } =  require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const path =  require('path');
const { fileLoader, mergeTypes, mergeResolvers } = require('merge-graphql-schemas');
const models = require('./src/db/models');
const { jwt } = require("./src/auth");

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './src/schema')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './src/resolvers')));

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const app = express();

app.use('/symbols', express.static('./public/symbols'));
app.use(
    '/graphql',
    bodyParser.json(),
    jwt,
    graphqlExpress(request => {
        return {
            schema: schema,
            context: {
                models: models,
                request: request,
            }
        }
    })
);
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));    
app.listen(8082);

var s = schedule.scheduleJob('0 30 11 * * *', job);
const imap = {
    user: "aftabaig@gmail.com",
    password: "qicutbrtkdclbwkx",
    host: "imap.gmail.com",
    port: 993,
    tls: true
}

module.exports = app;