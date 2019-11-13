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

let paramsList = require('../config/Params')

/**
 * Middleware for validation inputs
 * @param controller
 * @param action
 * @param req
 * @param res
 * @param next
 * @returns {*|Promise<any>}
 */
module.exports = (controller, action, req, res, next) => {
    let validate = paramsList[controller][action].validate(req.params)
    if (validate.error) {
        return res.json({
            result: false,
            data: {},
            error: {
                message: 'validate error',
                detail: validate.error.details
            }
        })
    } else {
        next(req, res)
    }
}