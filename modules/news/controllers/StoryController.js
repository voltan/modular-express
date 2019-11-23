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

const newsService = require('../services/StoryService')

exports.index = async function (req, res, next) {
    const result = await newsService.updateHits(req.params.id)
    res.json(result)
}

exports.else = async function (req, res, next) {
    res.json({ result: false, data: {}, error: { code: 1, message: 'No action set for use system module !' } })
}