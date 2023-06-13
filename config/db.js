const { default: mongoose } = require("mongoose");

async function dbConnect () {
  await mongoose.connect('mongodb://localhost:27017/carefinder')
  console.log('DB connected')
}

module.exports = dbConnect;
