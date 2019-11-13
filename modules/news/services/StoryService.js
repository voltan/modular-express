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
exports.updateHits = async function (id) {
    // ToDo : story hits update

    try {
        let result = { result: true, data: { message: 'story hits update !', id: id }, error: {} }
        return result
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }

}