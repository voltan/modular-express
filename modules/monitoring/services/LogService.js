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
exports.save = async function (params) {
    try {

        /* console.log('========================')
        console.log(params)
        console.log('========================') */

        // Inset to db
        let result = await db.monitoringLog.create(params)

        // Check result
        if ( typeof result.dataValues.id !== 'undefined' && result.dataValues.id > 0 ) {
            return { result: true, data: result.dataValues, error: { code: 0, message: '' } }
        } else {
            return { result: false, data: {}, error: { code: 1, message: 'error to save data !' } }
        }
    } catch (e) {
        // Log Errors
        throw Error('Error while Insert log')
    }
}