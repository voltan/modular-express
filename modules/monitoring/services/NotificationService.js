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

module.exports = {
    send: (params) => {
        return {
            result: true,
            data: {
                params: params,
                time: new Date(),
                message: 'its OK!',
            },
            error: {}
        };
    },

    call: (params) => {
        return {
            result: true,
            data: {
                params: params,
                time: new Date(),
                message: 'its OK!',
            },
            error: {}
        };
    }
}