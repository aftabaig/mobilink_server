var config = {
    development: {
        mail: {
            from: '"Jazz App" <aftabaig@gmail.com>',
            to: [
                'aftab.flash@gmail.com'
            ],
            cc: [
            ],
            subject: 'Whitlisting Batch',
            html: '',
            fileName: 'Whitlisting Batch.csv'
        }
    },
    production: {
        mail: {
            from: '"Jazz App" <aftabaig@gmail.com>',
            to: [
                'faisal.zaman@jazz.com.pk'
            ],
            cc: [
                'aftab.flash@gmail.com',
                'riaz.chaudhry@jazz.com.pk',
                'hasnain.syed@jazz.com.pk',
                'tahir.awan@jazz.com.pk'
            ],
            subject: 'Whitlisting Batch',
            html: '',
            fileName: 'Whitlisting Batch.csv'
        }
    }
}

module.exports = config;