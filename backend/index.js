var express = require('express'),
   app = express(),
   port = process.env.PORT || 3000,
   mongoose = require('mongoose'),
   cors = require('cors'),
   bodyParser = require('body-parser'),
   company = require('./model/company'),
   employee = require('./model/employee') ,
   user = require('./model/user'),
   blog = require('./model/blog'),
   query = require('./model/query')  ; //created model loading here
   const db = require("./model");
   const Role = db.role;

// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/companyportaldb',  { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      console.log('DB sucessfully connected')
      initial();
   },
   error => {
      console.log('DB could not connected: ' + error)
   }
)

// Setting up configurations
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Setting up the routes
var companyRoute = require('./routes/company'); //importing route
companyRoute(app); //register the route
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Auth application." });
});

app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
   next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });
      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}
//End of auth