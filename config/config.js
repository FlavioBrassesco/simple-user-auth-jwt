import dotenv from "dotenv";
dotenv.config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "Ag98k2j0129!c78fbj!D",
  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST,
};
export default config;
