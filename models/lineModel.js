var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var lineModel = new Schema({
    prodCode: {
        type: String,
        unique: true
    }
});

module.exports = mongoose.model('Line', lineModel);