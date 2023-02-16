const Sequelize = require("sequelize");
const Event = require("./Event");
const Organizer = require("./Organizer");
const Payment = require("./Payments");
const PaymentMethod = require("./PaymentMethod");
const Theme = require("./Theme");
const User = require("./User");

const sequelize = new Sequelize(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Event = Event(sequelize);
db.Organizer = Organizer(sequelize);
db.Payment = Payment(sequelize);
db.PaymentMethod = PaymentMethod(sequelize);
db.Theme = Theme(sequelize);
db.User = User(sequelize);

// Associations
db.Event.belongsTo(db.Organizer, {
  foreignKey: "organizerId",
  as: "organizer",
});
db.Organizer.hasMany(db.Event, {
  foreignKey: "organizerId",
  as: "events",
  onDelete: "CASCADE",
});

db.Event.belongsTo(db.Theme, {
  foreignKey: "themeId",
  as: "theme",
});
db.Theme.hasMany(db.Event, {
  foreignKey: "themeId",
  as: "events",
});

db.Payment.belongsTo(db.Event, {
  foreignKey: "eventId",
  as: "event",
});
db.Event.hasMany(db.Payment, {
  foreignKey: "eventId",
  as: "payments",
});

db.Payment.belongsTo(db.User, {
  foreignKey: "userId",
  as: "user",
});
db.User.hasMany(db.Payment, {
  foreignKey: "userId",
  as: "payments",
});

module.exports = db;
