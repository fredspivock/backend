var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var nicotineModel = new Schema({
    nicotine: {
        type: Number,
        unique: true
    },
    value: {
        type: Number
    }
});

module.exports = mongoose.model('Nicotine', nicotineModel);