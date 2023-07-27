const express = require('express');
const app = express();
const port = 3002;


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log("entered get root get");
    res.sendFile(__dirname + '/public/index.html');
})


app.post('/converttoarray', (req, res) => {
    const data =req.body.input
    try {
        JSON.parse(data);
    } catch(err) {
        console.log(err)
        res.send('invalid json input');
    }
    res.send([data]); // returns whatever we get as array;
});

app.get('/:name', (req, res) => {
    // console.log("entered name route`");
    const queryParams = req.params.name;
    res.status(200).json({
        queryParams,
        pathParams: req.path
    });
});

app.listen(port, () => {
    console.log("server is running");
});