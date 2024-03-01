import express from 'express'
import bodyParser from "body-parser";
import favoriteRouter from './app/router/favoriteRoute.js/favoriteRouter.js';

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.use('/favorite', favoriteRouter);


app.listen(3000, ()=>{
    console.log('server listening on port 3000')
});