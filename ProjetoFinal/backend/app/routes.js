module.exports = function (app, passport) {
    function isLoggedIn(req, res, next) {
    
        if (req.isAuthenticated())
            return next();
        res.redirect('/');
    }
    app.post('/login', passport.authenticate('local-login', {
            successRedirect: '/feed',
            failureRedirect: '/',
            failureFlash: true
        }),
        function (req, res) {
            console.log("hello");

            if (req.body.remember) {
                req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
                req.session.cookie.expires = false;
            }
            res.redirect('/');
        });
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/feed',
        failureRedirect: '/',
        failureFlash: true
    }));
    app.get('/profile', isLoggedIn, function (req, res) {
        
    });
    app.get('/feed', isLoggedIn, function (req, res) {
        
    });
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
};
