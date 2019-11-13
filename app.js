/**
 * Modular express (https://github.com/voltan/pi-engine-nodejs)
 *
 * @link            https://github.com/voltan/pi-engine-nodejs Modular Approach for expressJs
 * @copyright       Copyright (c) Modular express since 2019
 * @license         This software is licensed under the MIT License.
 */

/**
 * @author Hossein Azizabadi <azizabadi@faragostaresh.com>
 */
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// Load route
let indexRouter = require('./routes/index');
let newsRouter = require('./routes/news');
let userRouter = require('./routes/user');

// Set express
let app = express();

// Set all middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/news', newsRouter);
app.use('/user', userRouter);

module.exports = app;