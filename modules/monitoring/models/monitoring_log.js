module.exports = function (sequelize, DataTypes) {
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
            field: 'user_token'
        },
        action: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'action'
        },
        requestParams: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'request_params'
        },
        requestResult: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'request_result'
        },
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'monitoring_log'
    })
}
