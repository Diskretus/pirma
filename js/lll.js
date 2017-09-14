const express = require('express')
const app = express()

let data = {
    0: 'Jonava',
    1: 'Kaunas',
    2: 'Vilnius',
    3: 'Klaipeda',
    4: 'Panevezys',
    5: 'Pasvalys'
}

app.get('/cities', (showAll));