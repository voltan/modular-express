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
const router = express.Router()
const schemaMiddleware = require('../../../middleware/Schema')
const logController = require('../controllers/LogController')
const visitController = require('../controllers/VisitController')

// Set visit
router.post('/visit', function (req, res, next) {
    schemaMiddleware('monitoring', 'visit', 'index', 'post', req, res, (req, res) => {
        visitController.index(req, res)
    })
})

// Set call logs
router.post('/log', function (req, res, next) {
    schemaMiddleware('monitoring', 'log', 'index', 'post', req, res, (req, res) => {
        logController.index(req, res)
    })
})

// Set no action
router.get('*', logController.else)

module.exports = router