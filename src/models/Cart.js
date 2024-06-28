const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Cart = sequelize.define('cart', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  //productId
  //userId -> lo obetengo del req.user.id
});

module.exports = Cart;

//unidades:3, userId:1 , productId:5 🛒
//unidades:2, userId:1 , productId:2 🛒
//unidades:3, userId:1 , productId:5 🛒