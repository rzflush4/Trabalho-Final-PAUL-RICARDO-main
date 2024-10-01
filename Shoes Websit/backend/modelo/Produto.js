const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Produto extends Model {}

Produto.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(45)
    },
    preco: {
        type: DataTypes.DECIMAL
    },
    imagem: {
        type: DataTypes.STRING(200)
    },
    marca: {
        type: DataTypes.STRING(45)
    },

}, {
    sequelize,
    modelName: 'produtos',
    timestamps: false
});

module.exports = Produto;