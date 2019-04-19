const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    surname: String,
    birthday: String,
    email: Array,
    sex: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;