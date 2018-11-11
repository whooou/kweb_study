const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req,res) => { printreq(req); res.send('This is main page.'); });
app.get('/board', (req,res) => { printreq(req); res.send('This is board page.'); });

app.post('/board', (req,res) => { printreq(req); res.send('This is board write page.'); });

app.use( (req,res) => { printreq(req); res.status(404).send("404 Not found"); });
app.use( (err, req, res, next) => res.status(404).send('err.message'));

app.listen(port, () => console.log(`server online`));

function printreq(req){
  console.log(`${req.method} ${req.url}
${Object.keys(req.headers).map(k => `${k}: ${req.headers[k]}`).join('\n')}
`);

req.on('data', d => console.log(d.toString()));  
};