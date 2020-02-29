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
const path = require('path')

module.exports = {
    /**
     * Load all of modules
     * @param app
     * @param systemConfig
     */
    load: function (app, systemConfig) {
        if (systemConfig.module.load && systemConfig.module.cron) {
            fs.readdir('./modules', { withFileTypes: true }, (err, entries) => {
                entries.forEach(entry => {
                    if (entry.isDirectory()) {
                        let modelPath = path.join(__dirname, '../') + '/modules/' + entry.name + '/cron'
                        if (fs.existsSync(modelPath)) {
                            fs.readdirSync(modelPath).filter(file => {
                                return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js')
                            }).forEach(file => {
                                require(path.join(modelPath, file))
                            })
                        }
                    }
                })
            })
        } else {
            console.log('Modules are disable and just system cron available !')
        }
    }
}