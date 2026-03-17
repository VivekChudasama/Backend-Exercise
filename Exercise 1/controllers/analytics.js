const reqCount = require('./user')

exports.analytics = (req , res , next) => {
    res.send(`total request count : ${reqCount.reqCount} times`)
}