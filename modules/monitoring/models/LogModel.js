'use strict'
module.exports = (sequelize, DataTypes) => {
    let monitoring = sequelize.define('monitoring_log', {
        user_id: DataTypes.INT,
        user_token: DataTypes.STRING,
        action: DataTypes.STRING
    })

    monitoring.associate = function (models) {
        models.monitoring.hasMany(models.Task)
    }

    return monitoring
}
