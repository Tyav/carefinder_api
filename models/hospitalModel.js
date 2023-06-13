const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  // Name, Address, Phone, email, description
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  description: {
    type: String
  },
  state: {
    type: mongoose.Types.ObjectId,
    ref: 'State',
  },
  nearbyCities: {
    type: [mongoose.Types.ObjectId],
    ref: 'City'
  }
}, { timestamps: true, });

hospitalSchema.method({
  // @ts-ignore
  toJSON: function () {
    // @ts-ignore
    const { _id, name, address, state, nearbyCities } = this;
    return { id: _id, name, address, state, nearbyCities }
  }
})


const HospitalModel = mongoose.model('Hospital', hospitalSchema);

module.exports = HospitalModel;