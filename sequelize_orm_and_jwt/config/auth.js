require('dotenv').config()

module.exports = {
    secret: process.env.AUTH_SECRET || 'password',
    expire: process.env.AUTH_EXPIRE || '10h',
    round: process.env.AUTH_ROUND || 10
}