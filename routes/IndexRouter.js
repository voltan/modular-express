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
let router = express.Router()
let indexController = require('../controllers/IndexController')

router.get('/', function (req, res, next) {
    indexController.index(req, res)
})

module.exports = router