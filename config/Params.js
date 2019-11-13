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

let Joi = require('@hapi/joi')

let params = {
    news: {
        story: Joi.object({
            id: Joi.number()
                .integer()
                .min(1)
                .max(1000000)
                .required()
        })
    }
}

module.exports = params