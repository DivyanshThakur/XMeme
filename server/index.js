import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import memeRouter from './routes/memes.js';
import dotenv from 'dotenv';
import responseTime from 'response-time';

if(process.env.NODE_ENV === 'production') {
        dotenv.config();
}

const app = express();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(responseTime());
app.use(cors());
app.use('/memes', memeRouter);

app.get('/', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send('Hello to X Memes API');
})

const PORT = process.env.PORT || 8081;
const URL = process.env.CONNECTION_URL || 'mongodb://localhost:27017/xmemes';

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(PORT, () => console.log('Server running on port: ' + PORT)))
        .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);