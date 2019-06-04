module.exports = function (app, passport) {
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

    // =====================================
    // SIGNUP ==============================
    // =====================================
    app.get('/signup', function (req, res) {
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
        });
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/feed',
        failureRedirect: '/',
        failureFlash: true
    }));

    // =====================================
    // PROFILE SECTION =========================
    // =====================================
    app.get('/profile', isLoggedIn, function (req, res) {
        res.render('profile.ejs', {
            user: req.user
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}