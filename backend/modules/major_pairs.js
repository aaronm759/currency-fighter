const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');
app.use(cors());



async function getUsdMajorPairs() {
    try {

        const apikey = process.env.API_KEY;

        const response = await fetch('https://api.currencylayer.com/live?access_key=' + apikey + '&currencies=AUD,EUR,GBP,JPY,CHF,CAD,NZD');
        const data = await response.json();
        const xaud = data.quotes.USDAUD;
        const xeur = data.quotes.USDEUR;
        const xgbp = data.quotes.USDGBP;
        const xjpy = data.quotes.USDJPY;
        const xchf = data.quotes.USDCHF;
        const xcad = data.quotes.USDCAD;
        const xnzd = data.quotes.USDNZD;
        const pairs = { xaud, xeur, xgbp, xjpy, xchf, xcad, xnzd };
        return { pairs }



    } catch (err) {
        console.log(err)

    }
};



module.exports.MajorP = getUsdMajorPairs;
