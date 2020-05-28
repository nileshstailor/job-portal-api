import express from 'express';
import  bodyParser from "body-parser";
import api from './src/api';
import cors from 'cors';

const app = express()
app.use(cors({ origin: true, credentials: true, optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", api);
app.use(bodyParser.json());
app.listen(5000, () => {
    console.log("Server has started")
})

