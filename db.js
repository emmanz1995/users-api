const mongoose = require('mongoose');
const { DB_URI } = require('./keys');

const db = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log('SUCCESS - Connected to Database!');
    } catch(e) {
        console.log(`ERROR - Problem with the Database ${e}`);
    }
}

module.exports = db;