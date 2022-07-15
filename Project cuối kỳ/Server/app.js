require('dotenv').config();
const BookRoute = require('./router/BookRouter.js');
const UserRoute = require('./router/UserRouter.js');
const LoginRoute = require('./router/LoginRouter.js');
const db = require('./config/connect');
const app = require('./library/application');
const cors = require('./library/cors.js');

app.use(cors());
db.connect();

app.addRoute(LoginRoute);
app.addRoute(BookRoute);
app.addRoute(UserRoute);

app.use(function errorHandler(req, res, next) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.write('404 not found');
    res.end();
})

module.exports = app.submit;