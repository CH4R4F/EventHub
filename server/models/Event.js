const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Event = sequelize.define(
    "Event",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      thumbnail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      startTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      timeZone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      endBookingDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "USD",
        validate: {
          isIn: [["USD", "EUR", "MAD"]],
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maxParticipants: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      tableName: "events",
      timestamps: false,
    }
  );

  return Event;
};
