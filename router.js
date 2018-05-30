const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send({ message: 'Hello World! I\'m an unprotected route!' });
    });

    app.get('/api', requireAuth, function(req, res) {
        res.send({ message: 'Hello World! I\'m a protected route!' });
    });

    app.post('/api/signin', requireSignIn, Authentication.signin);
    app.post('/api/signup', Authentication.signup);
};