const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

    const Produs = sequelize.define('produs', {
        nume: {
            type: DataTypes.STRING,
            allowNull: false
        },

        pret: {
            type: DataTypes.FLOAT,
            allowNull: false
        },

        descriere: {
            type: DataTypes.TEXT
        }
    })

    return Produs

}