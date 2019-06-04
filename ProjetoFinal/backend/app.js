const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

// require('./config/passport.js')(passport);
// require('./app/routes.js')(app, passport);
var connection = require('./app/database.js');
connection.connect()

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});