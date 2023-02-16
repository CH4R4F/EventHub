const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Payment = sequelize.define(
    "Payment",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["pending", "success", "failed"]],
        },
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "payments",
      timestamps: true,
    }
  );

  return Payment;
};
