// Example config. Copy and rename this file to this location as 'config.js'
// This copied file should hold actual application secrets and config
// NEVER check in ACTUAL config.js file
// Sample secret generator: nux.net/secret

module.exports = {
    secret: 'somereallylongcomplexsecretstringthatshouldbekeptsafeforevers', // salt used for hashing
    db: 'mongodb://username:password@url:port/db-name', // remote prod database
    db_dev: 'mongodb://username:password@url:port/db-name', // remote dev database
    db_local: 'mongodb://127.0.0.1:27017/db-name' // local dev database
};