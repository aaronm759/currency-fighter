const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { request, response } = require('express');
const fetch = require('node-fetch');
const schedule = require('node-schedule');
require('dotenv').config();
const { MongoClient } = require('mongodb');

app.use(cors());



app.use(express.static('frontend/build'));

const port = process.env.PORT || 5000;
app.listen(port);
console.log('listening');


async function main() {
    const password = process.env.DB_KEY;
    const uri = "mongodb+srv://" + password + "@exchange-rates.xfrob.mongodb.net/usdExchangeRates?retryWrites=true&w=majority"
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


    try {
        await client.connect();


    } catch (e) {
        console.error(e);
    }
};

//main().catch(console.err);
//since i will be making multiple server calls through out the day
//it is currently too expensive to collect data at this time.

/*------------------------------*/
/*------modules-----------------*/
/*------------------------------*/


const major = require('./modules/major_pairs');


major.MajorP(fetch).then(response => {
    const data = response
    console.log(data)
    app.get('/xChange', (request, response) => {
        response.json(data);


    });

})






