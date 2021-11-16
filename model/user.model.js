const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    birthday: Date,
    occupation: String,
    salary: Number,
    avatar: String,
    gender: String,
    links: [{ type: String }]
}, {
    timestamps: true
})

mongoose.model('users', userSchema);