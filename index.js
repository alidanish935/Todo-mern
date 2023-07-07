import express from 'express'
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors'
import  path  from 'path';
import Routes from './routes/route.js'
import bodyParser from 'body-parser'

const __dirname = path.resolve();


const app = express();


app.use(cors())
app.use(express.json());


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))

dotenv.config()
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

app.use('/',Routes);

app.use(express.static(path.join(__dirname,"./client/build/index.html")))
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

const PORT = process.env.PORT|| 8000
Connection(USERNAME,PASSWORD);
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))
