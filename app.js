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
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const systemConfig = require('./config/config.json')

// Set service
const moduleService = require('./services/ModuleService')
const moduleCron = require('./services/CronService')

// Set route
const indexRouter = require('./routes/IndexRouter')

// Set database
global.db = require('./models/index')

// Set express
const app = express()

// Set all middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// Load route
app.use('/', indexRouter)

// Load services
moduleService.load(app, systemConfig)
moduleCron.load(app, systemConfig)

module.exports = app