import express from 'express'
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors'
import Routes from './routes/route.js'
import bodyParser from 'body-parser'


const app = express();


app.use(cors())

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))

dotenv.config()
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

app.use('/',Routes);



const PORT = process.env.PORT|| 8000
Connection(USERNAME,PASSWORD);
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))