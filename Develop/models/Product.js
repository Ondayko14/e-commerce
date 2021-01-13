// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  {
    Product_name: DataTypes.STRING,
    allowNull: false,
  },
  {
    price: DataTypes.INTEGER,
    allowNull: false
  },
  {
    stock: DataTypes.INTEGER,
    allowNull: false
  },
  {
    category_id: DataTypes.INTEGER,
    references: {
      model: 'category',
      key: 'id'
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
