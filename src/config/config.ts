export default {
  jswSecret: process.env.JWT_SECRET || "anyword",
  DB: {
    URI: process.env.MONGO_URI,
    USER: process.env.MONGO_USER,
    PASSWORD: process.env.MONGO_PASSPORT,
  },
};
