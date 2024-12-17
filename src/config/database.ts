import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

sequelize
  .sync()
  .then(() => console.log("Database connected and synced!"))
  .catch((err) => console.error("Database connection failed:", err));

export default sequelize;
