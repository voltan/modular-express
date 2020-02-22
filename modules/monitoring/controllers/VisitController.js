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

const visitService = require('../services/VisitService')
const requestIp = require('request-ip');

exports.index = async function (req, res, next) {
    // Set params
    const params = {
        section: req.body.section,
        modules: req.body.modules,
        entity: req.body.entity,
        entityId: req.body.entity_id,
        action: req.body.action,
        userId: req.body.user_id,
        userToken: req.body.user_token,
        ip: requestIp.getClientIp(req),
        source: req.body.source,
    }

    // Call service
    const result = await visitService.save(params)

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