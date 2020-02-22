module.exports = function (sequelize, DataTypes) {
    return sequelize.define('monitoringVisit', {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        section: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'section'
        },
        modules: {
            type: DataTypes.STRING(50),
            allowNull: true,
            field: 'modules'
        },
        entity: {
            type: DataTypes.STRING(50),
            allowNull: true,
            field: 'entity'
        },
        entityId: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            defaultValue: '0',
            field: 'entity_id'
        },
        action: {
            type: DataTypes.STRING(50),
            allowNull: true,
            field: 'action'
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
        ip: {
            type: DataTypes.STRING(16),
            allowNull: true,
            field: 'ip'
        },
        source: {
            type: DataTypes.STRING(10),
            allowNull: true,
            field: 'source'
        },
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'monitoring_visit'
    })
}
