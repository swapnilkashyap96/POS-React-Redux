const items = require("../Model/itemSchema");



const itemApiCall = async (req, res) => {
    try {
        const data = await items.find()
        res.status(200).json({
            message: `We have catched Data from server`,
            result: data
        })
    } catch (error) {
        console.log(`Get API Not Working ${error.message}`.bgRed.white);
    }
}


const createItem = async (req, res) => {

    try {
        const data = req.body;
        const newdata = new items(data)
        await newdata.save()
        res.status(201).json({
            message: 'Data Successfully Added',
            result: newdata
        })

        console.log(newdata);
    } catch (error) {
        res.send(400).json({
            result: error
        })
        console.log(error);
    }
}

module.exports = { itemApiCall, createItem }