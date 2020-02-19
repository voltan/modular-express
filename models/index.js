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

'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(module.filename)
const systemConfig = require('../config/config.json')
const db = {}

// Set connection
let sequelize = new Sequelize(
    systemConfig.database.database,
    systemConfig.database.username,
    systemConfig.database.password,
    systemConfig.database
)

fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== 'relations.js')&& (file !== 'index.js') && (file !== basename) && (file.slice(-3) === '.js')
}).forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
})

Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize

module.exports = db