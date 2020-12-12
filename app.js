const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
const initializePassport = require('./passport.init');
const loginRouter = require('./routes/login');
const projectsRouter = require('./routes/projects');
const employeesRouter = require('./routes/employees');
const youtubeRouter = require('./routes/youtube');
const authRouter = require('./routes/auth');
const pekocardRouter = require('./routes/pekocard');


const app = express();

if(process.env.NODE_ENV === 'development') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(session({ 
  secret: process.env.SESSION_SECRET,
  key: 'sid',
  saveUninitialized: true,
}));

initializePassport()


// Catch a start up request so that a sleepy Heroku instance can  
// be responsive as soon as possible
app.get('/wake-up', (req, res) => res.send('👍'));

app.use('/pekocard', pekocardRouter);
app.use('/login', loginRouter);
app.use('/projects', projectsRouter);
app.use('/employees', employeesRouter);
app.use('/youtube', youtubeRouter);
app.use('/auth', authRouter);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
}); 

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const startSocket = (io) => {
  app.set('io', io)
  require('./controllers/youtube').startSocket(io);
}

module.exports = { app, startSocket };