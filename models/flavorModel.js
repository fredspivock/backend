var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var flavorModel = new Schema({
    name: {
        type: String,
        unique: true
    },
    value: {
        type: Number,
        min: 0,
        unique: true
    }
});

module.exports = mongoose.model('Flavor', flavorModel);