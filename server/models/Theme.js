const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Theme = sequelize.define(
    "Theme",
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
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "themes",
      timestamps: false,
    }
  );

  return Theme;
};
