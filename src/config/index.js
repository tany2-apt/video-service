let DB_URI = "mongodb+srv://tanya:cewAABW53yy6dbru@cluster0.da0c2.mongodb.net/?retryWrites=true&w=majority";

if (process.env.MONGO_DB_URI) {
  DB_URI = process.env.MONGO_DB_URI;
}

module.exports = {
  DB_URI
};
