const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('colors')
dotenv.config()

const connectDB = async () => {
    try {
        const connt = await mongoose.connect(process.env.MONGO_DB);
        console.log(`DataBase Connected ${connt.connection.host}`.bgYellow);
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = connectDB