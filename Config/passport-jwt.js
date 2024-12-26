const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");
const User = require("../Model/User");

const secret = process.env.JWTsecret;
const clientId = process.env.clientId;
const clientSecret = process.env.clientSecret;

// JWT Strategy
const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret,
    issuer: "accounts.examplesoft.com",
    audience: "yoursite.net",
};

passport.use(
    new JwtStrategy(jwtOpts, async (jwt_payload, done) => {
        try {
            const user = await User.findById(jwt_payload.sub);

            if (user) {
                return done(null, user);
            }
            return done(null, false);
        } catch (error) {
            return done(err, false);
        }
    })
);

// Google 0Auth Strategy
passport.use(
    new GoogleStrategy({
        clientID: clientId,
        clientSecret: clientSecret,
        callbackURL: "/auth/google/callback",
    }),
    async (accessToken, refreshToken, profile, done) => {
        try {
            let user = await User.findOne({ googleId: profile.id });

            if (!user) {
                // Create a new user if not found
                user = await User.create({
                    googleId: profile.id,
                    name: profile.displayName,
                    email: profile.emails[0].value,
                });
            }

            return done(null, user);
        } catch (error) {
            return done(error, false);
        }
    }
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
});

module.exports = passport;
