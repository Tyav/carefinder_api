const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
  // Name, Address, Phone, email, description
  name: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true, });

stateSchema.method({
  // @ts-ignore
  toJSON: function (doc) {
    // @ts-ignore
    const { _id, name } = this;
    return { id: _id, name}
  }
})

const StateModel = mongoose.model('State', stateSchema);

module.exports = StateModel;