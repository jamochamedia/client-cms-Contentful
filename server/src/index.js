//import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

//define express app
const app = express();

//app security
app.use(helmet());

//for parsing application/json content
app.use(bodyParser.json());

//enable CORS requests
app.use(cors());

//log HTTP requests
app.use(morgan("combined"));

//Check JWT
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://jamocha.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: "PB3cwRt09eS4nM4PIzkGeCVGIETDTS4k",
  issuer: `https://jamocha.auth0.com/`,
  algorithms: ["RS256"]
});

//app.post TODO

//start server
app.listen(8000, () => {
  console.log("listening on http://localhost:8000/");
});
