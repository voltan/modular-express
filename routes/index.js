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
let router = express.Router();

router.get('/', function(req, res, next) {
  res.json({result: true, data: {message: 'Express work fine !'}, error: {}})
});

module.exports = router;
