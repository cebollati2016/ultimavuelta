import passport from "passport";

import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import { upsertUser } from "../db/user.db.js";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const processGoogleProfile = async (profile, state) => {
  const { id: googleId, displayName: fullName, emails, photos } = profile;
  const email = emails[0].value;
  const photo = photos[0].value;
  const languageId = state.language.id;

  return await upsertUser({
    googleId,
    fullName,
    email,
    photo,
    languageId,
  });
};

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      const stateQuery = req.query.state;

      try {
        const state = JSON.parse(stateQuery);

        const { user } = await processGoogleProfile(profile, state);

        return done(null, user);
      } catch (err) {
        return done({ err: "Failed to parse state" });
      }
    }
  )
);

export { passport };
