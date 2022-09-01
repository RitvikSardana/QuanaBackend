const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT,()=>{
    console.log(`Server Running on ${process.env.PORT} `)
})

const api = require('./routes/api')

app.use('/api',api)