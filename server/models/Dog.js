// Import mongoose.
const mongoose = require('mongoose');

// Create the model.
let DogModel = {};

// Create the schema.
const DogSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    require: true,
    trim: true,
    unique: false,
  },

  age: {
    type: Number,
    min: 0,
    required: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

});

// Static functions.
DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};

// Create the model.
DogModel = mongoose.model('Dog', DogSchema);

// Export.
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
