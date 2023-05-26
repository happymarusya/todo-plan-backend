const express = require('express');
const app = express();
const mongoose = require('mongoose');

const routes = require('./TodoRoutes');

const cors = require('cors')

require('dotenv').config();
mongoose.set('strictQuery', false);

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('We were connected to Mongo'))
.catch((err) => console.log(err))

app.use(routes);

const PORT = 3000 || process.env.port;

app.listen(PORT, () => {
    console.log(`I am listenning on port ${PORT}`)
})
