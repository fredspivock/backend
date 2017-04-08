var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var oemModel = new Schema({
    name: {
        type: String,
        unique: true
    },
    flavors: {
        type: Array
    },
    value: {
        type: Number,
        min: 0,
        unique: true
    }
});

module.exports= mongoose.model('Oem', oemModel);