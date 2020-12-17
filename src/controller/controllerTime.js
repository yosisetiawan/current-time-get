const moment = require('moment')
// moment.tz.setDefault("Asia/Jakarta")
moment.locale("id")
/* hidding moment warning messages */
moment.suppressDeprecationWarnings = true

// const formatDate = (date, format = 'DD MMMM YYYY') => {
//     return date.format(format)
//}

exports.index = (req, res) => {
    const currentNow = moment().format('DD MMMM YYYY HH:mm:ss')

    return res.send({
        time: currentNow
    })
}


exports.unix = (req, res ) => {
    const currentUnix = moment().format('X')

    return res.send({
        time: currentUnix
    })
}