const express = require('express')
const { itemApiCall, createItem } = require('../Controller/itemController')

const routerApi = express.Router()

routerApi.get('/get-api', itemApiCall)
routerApi.post('/createItemApi', createItem)

module.exports = { routerApi }