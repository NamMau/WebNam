var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
// var customerRouter = require('./routes/customer')
const mongoose = require("mongoose");
mongoose.set("strictQuery", false); 


var app = express();
mongoose
  .connect(
    "mongodb+srv://nammtgch210927:nammau6996@cluster0.izkeiaj.mongodb.net/102",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    // Rest of your code
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
// var mongoose = require("mongoose");
// var db =
//   "mongodb+srv://nammtgch210927:nammau69@cluster0.izkeiaj.mongodb.net/102";
// mongoose.connect(db).then(() => {
//   console.log("connect to db ok!");
// });
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use('/customer', customerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.use(express.static('public'));

// Serve static files

app.use(express.static('public')); // Assuming your CSS file is located in the 'public' directory

// Rest of your server code
var port = process.env.PORT || 6969;
app.listen(port);

module.exports = app;
