var connection = require('../app/database.js');
var LocalStrategy = require('passport-local').Strategy;

// expose this function to our app using module.exports
module.exports = function (passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        connection.query("select * from perfil where id = " + id, function (err, rows) {
            done(err, rows[0]);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================

    passport.use('local-signup',new LocalStrategy({
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true 
            },
            function (req, email, password, done) {
                connection.query("SELECT * FROM perfil WHERE email = ?", [email], function (err, rows) {
                    if (err)
                        return done(err);
                    if (rows.length) {
                        return done(null, false, req.flash('signupMessage', 'Este email encontra-se registado. Selecione outro ou entre na sua conta.'));
                    } else {
                        var newUserMysql = {
                            email: email,
                            password: password
                        };

                        var insertQuery = "INSERT INTO perfil ( email, password ) values (?,?)";

                        connection.query(insertQuery, [newUserMysql.email, newUserMysql.password], function (err, rows) {
                            newUserMysql.id = rows.insertId;

                            return done(null, newUserMysql);
                        });
                    }
                });
            })
    );

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    passport.use('local-login', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true 
        },
        function (req, email, password, done) {
            connection.query("SELECT * FROM `perfil` WHERE `email` = '" + email + "'", function (err, rows) {
                if (err)
                    return done(err);
                if (!rows.length) {
                    return done(null, false, req.flash('loginMessage', 'Utilizador nao existe ou email/password errada'));
                }

                if (!(rows[0].password == password))
                    return done(null, false, req.flash('loginMessage', 'Utilizador nao existe ou email/password errada'));
                return done(null, rows[0]);

            });
        }));

};