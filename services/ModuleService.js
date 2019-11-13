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

const fs = require('fs')

module.exports = {
    /**
     * Load all of modules
     * @param app
     */
    load: function (app) {
        fs.readdir('./modules', { withFileTypes: true }, (err, entries) => {
            if (!err) {
                entries.forEach(entry => {
                    if (entry.isDirectory()) {
                        let config = require('../modules/' + entry.name + '/config/config.json')
                        let router = require('../modules/' + entry.name + '/routes/' + config.route.name)
                        app.use(config.route.prefix, router)
                    }
                })
            } else {
                console.log(err)
            }
        })
    }
}