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

const Joi = require('@hapi/joi')

const params = {
    news: {
        story: {
            index: Joi.object({
                id: Joi.number()
                    .integer()
                    .min(1)
                    .max(1000000)
                    .required()
            })
        }
    },
    monitoring: {
        log: {
            index: Joi.object({
                user_id: Joi.number()
                    .integer()
                    .min(1)
                    .max(1000000)
                    .required(),
                user_token: Joi.string()
                    .pattern(new RegExp('^[a-zA-Z0-9]{15,32}$'))
                    .required(),
                action: Joi.string()
                    .pattern(new RegExp('^[a-zA-Z0-9]{2,32}$'))
                    .required(),
            })
        }
    },
}

module.exports = params