const express = require('express');
const cors = require('cors');
require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const connectDB = require('./Config/Config');
const { routerApi } = require('./Router/Routes');
dotenv.config();
connectDB()




const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(morgan('tiny'))


//Routes
// app.use('/', (req, res) => {
//     res.send('Welcome To Home')
// })

app.use('/api', routerApi)



const PORT = process.env.PORT || 8000;
app.listen(process.env.PORT, () => {
    console.log(`Server Is Runing On Port ${PORT}`.inverse);
})