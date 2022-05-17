let DB_URI = "http://localhost:27017/test-db";

if (process.env.MONGO_DB_URI) {
  DB_URI = process.env.MONGO_DB_URI;
}

module.exports = {
  DB_URI
};
