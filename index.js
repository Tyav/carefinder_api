const express = require('express');
const app = express();
const v1Routes = require('./routes');
const { connect } = require('mongoose');
const dbConnect = require('./config/db');

const notFound = express.Router()

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

app.listen(5000, () => {
  console.log("server started at port 5000")
  dbConnect()
});