const restful = require('node-restful');
const mongoose = restful.mongoose;

const Services = new mongoose.Schema({

    servic: String,
    name: String,
    price: Number,
});

module.exports = restful.model('services', Services);