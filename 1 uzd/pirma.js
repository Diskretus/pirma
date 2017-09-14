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

function showAll(req, res) {
    res.send(data);
}

app.get('/search/:city', showOne);

function showOne(req, res) {
    let city = req.params['city'];
    let replay = {};

    if (data[city] === undefined) {
        replay.status = 'tokio miesto nera';
    } else {
        replay.miestas = data[city];
    }
    res.send(replay);
}
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})