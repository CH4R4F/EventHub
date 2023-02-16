const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const PaymentMethod = sequelize.define(
    "PaymentMethod",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["card", "paypal"]],
        },
      },
      info: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    {
      tableName: "payment_methods",
      timestamps: false,
    }
  );

  return PaymentMethod;
};
