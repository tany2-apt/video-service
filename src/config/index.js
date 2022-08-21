let DB_URI = "mongodb://mongodb-service:27017/cloudl";

if (process.env.MONGO_DB_URI) {
  DB_URI = process.env.MONGO_DB_URI;
}

module.exports = {
  DB_URI
};
