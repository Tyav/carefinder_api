const express = require('express');
const cors = require('cors');
const app = express();
const v1Routes = require('./routes');
const dbConnect = require('./config/db');

const notFound = express.Router()

app.set('view engine', 'ejs');

app.use(cors())
 

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.use('/v1', v1Routes)

notFound.use((req, res) => {
  res.status(404).json({
    message: "Resource not found"
  })
})

app.use(notFound);

app.listen(process.env.PORT||5000, () => {
  console.log("server started at port 5000")
  dbConnect()
});