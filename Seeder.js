const mongoose = require('mongoose');
const connectDB = require('./Config/Config');
const dotenv = require('dotenv');
const items = require('./Model/itemSchema');
const itemsData = require('./Utils/data')
dotenv.config();

connectDB()


const importData = async () => {
    try {
        await items.deleteMany()
        const itemslist = await items.insertMany(itemsData)
        console.log(`All Items Added ${itemslist}`.bgBlack.inverse);
        process.exit(1)
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

importData()