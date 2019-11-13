'use strict'
module.exports = (sequelize, DataTypes) => {
    var news = sequelize.define('news', {
        title: DataTypes.STRING
    })

    news.associate = function (models) {
        models.news.hasMany(models.Task)
    }

    return news
}
