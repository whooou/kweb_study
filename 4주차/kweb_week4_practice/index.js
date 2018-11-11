//실습3
const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const cal = require('./cal');

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));
app.get('/calculation', (req, res) => res.render('cal', { x: cal.add(1,2), y: cal.mod(19247,423), E: cal.getE()}));

app.listen(port, () => console.log(`KWEB.week4 - Practice 2`));



/*middle-실습1,2
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/', (req, res) => {
    console.log(`${req.method} ${req.url}
        ${Object.keys(req.headers).map(k => `${k}: ${req.headers[k]}`).join('/n')}`);
    res.redirect('/');
});

app.get('/body', (req,res) => { throw new Error('TEST!');});
app.post('/body', (req,res) => { res.send(req.body); });

app.use(function (err, req, res, next){
    console.log(err);
    res.statusCode = 500;
    res.send('error');
});

app.listen(port, () => console.log(`KWEB.week4 - Practice 2`));
*/