const mongoose = require("mongoose");
const db =
 // "mongodb+srv://cluster1.1js2j5g.mongodb.net/%22%20--apiVersion%201%20--username%20souravnag";
 "mongodb+srv://Souarav008:0QPr1vqkAxsrpMMx@cluster1.1js2j5g.mongodb.net/souravnag";
/* Replace <password> with your database password */

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;