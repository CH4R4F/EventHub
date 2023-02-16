const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Organizer = sequelize.define(
    "Organizer",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CIN: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zipCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["active", "inactive"]],
        },
        defaultValue: "active",
      },
    },
    {
      tableName: "organizers",
      timestamps: true,
    }
  );

  return Organizer;
};
