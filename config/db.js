const { default: mongoose } = require("mongoose");

async function dbConnect () {
  await mongoose.connect(process.env.DB||'mongodb://localhost:27017/carefinder')
  console.log('DB connected')
}

module.exports = dbConnect;
