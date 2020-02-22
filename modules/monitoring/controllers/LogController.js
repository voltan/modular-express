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

const logService = require('../services/LogService')

exports.index = async function (req, res, next) {
    // Set params
    const params = {
        userId: req.body.user_id,
        userToken: req.body.user_token,
        action: req.body.action,
        requestParams: JSON.stringify(req.body.request_params),
        requestResult: JSON.stringify(req.body.request_result)
    }

    // Call service
    const result = await logService.save(params)

    // Return result
    res.json(result)
}

exports.else = async function (req, res, next) {
    res.json({
        result: false,
        data: {},
        error: {
            code: 1,
            message: 'No action set for use system module !'
        }
    })
}