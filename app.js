const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const uri =
  "mongodb+srv://julian:thesky@cluster0.bjsvk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const session = require("express-session");
const User = require("./User");

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.find({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser(function (username, done) {
  User.find({ username: username }, function (err, user) {
    done(err, user);
  });
});

app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const newUser = new User({ username, password });
  newUser.save((error) => {
    if (error) {
      console.log("there was an error saving the new user");
      console.log(error);
    }
  });
  res.redirect("/login");
});

app.get("/logout", function (req, res) {
  
  req.logout();
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
