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
        console.log('========================')
        console.log(params)
        console.log('========================')

        db.monitoringLog.create(params).then(function (log) {
            // you can now access the newly created user
            console.log('success', log.toJSON())
        }).catch(function (err) {
            // print the error details
            console.log(err, params)
        })

        return { result: true, data: params, error: { code: 0, message: '' } }
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}