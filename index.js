const express = require('express');
const app = express();

app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.post('/api', (req, res) => {
    console.log('API Post Received');
    console.log(req.body);
    console.log(req.body.latitude);
    console.log(req.body.longitude);
    //response.end();
    res.json({
        status: "success",
        latitude: req.body.latitude,
        longitude: req.body.longitude
    });
});

app.get('/getJSON', (req, res) => {
    console.log('API GET Received');
    const senddata = {
        "message":"Account found.",
        "response":"SUCCESS",
        "zip":"32563",
        "phone":"850-555-4321",
        "state":"FL",
        "address1":"555 Brown Round Cir.",
        "lastname":"Anonymous",
        "address2":"",
        "firstname":"Jon",
        "statuscode":"5",
        "custid":"123456",
        "city":"City"};
    //response.end();
    res.json({
        status: "success",
        senddata: senddata
    });
});

