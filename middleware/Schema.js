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

const paramsList = require('../config/Params')

/**
 * Middleware for validation inputs
 * @param modules
 * @param controller
 * @param action
 * @param method
 * @param req
 * @param res
 * @param next
 * @returns {*|Promise<any>}
 */
module.exports = (modules, controller, action, method, req, res, next) => {
    let validate
    switch (method) {
        case 'get':
            validate = paramsList[modules][controller][action].validate(req.params)
            break

        case 'post':
            validate = paramsList[modules][controller][action].validate(req.body)
            break
    }

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