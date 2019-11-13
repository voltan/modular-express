/**
 * ModuleBase expressJs for PiEngine
 *
 * @link            https://github.com/voltan/pi-engine-nodejs Modular Approach for expressJs
 * @copyright       Copyright (c) Modular express since 2019
 * @license         This software is licensed under the MIT License.
 */

/**
 * @author Hossein Azizabadi <azizabadi@faragostaresh.com>
 */
let express = require('express')
let cookieParser = require('cookie-parser')
let logger = require('morgan')

// Set service path
let moduleService = require('./services/ModuleService')

// Set route path
let indexRouter = require('./routes/IndexRouter')

// Set express
let app = express()

// Set all middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// Load route
app.use('/', indexRouter)

// Load all modules by service
moduleService.load(app)

module.exports = app