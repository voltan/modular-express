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
let express = require('express')
let router = express.Router()
let schemaMiddleware = require('../middleware/schema')
let newsController = require('../controllers/news')

// Set story route
router.get('/story/:id', function (req, res, next) {
  schemaMiddleware('news', 'story', req, res, (req, res) => {
      newsController.story(req, res)
  })
})

// Set no action
router.get('*', newsController.else)

module.exports = router