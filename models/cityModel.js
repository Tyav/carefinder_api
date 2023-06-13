const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  // Name, Address, Phone, email, description
  name: {
    type: String,
    required: true
  },
  state: {
    type: mongoose.Types.ObjectId,
    ref: 'State',
  }
}, { timestamps: true, });

citySchema.method({
  toJSON: function () {
    // @ts-ignore
    const { _id, name, state } = this;
    return { id: _id, name, state }
  }
})

const CityModel = mongoose.model('City', citySchema);

module.exports = CityModel;