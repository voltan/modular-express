'use strict'
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('monitoringLog', {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        userId: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            defaultValue: '0',
            field: 'user_id'
        },
        userToken: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: "user_token"
        },
        action: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: "action"
        }
    }, {
        tableName: 'monitoring_log'
    })/*.sync({ alter: true })*/;
};
