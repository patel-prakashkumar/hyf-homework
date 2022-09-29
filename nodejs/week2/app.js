
const { json } = require("express");
const express = require("express");
const app = express();
const data = require("./document.json");
const port = process.env.PORT || 3000;
app.use(express.json())
app.get('/', (req, res) => {
    res.send('This is a search engine')
})
app.get('/search', (req, res) => {
    const searchWord = req.query.q
    // @ts-ignore
    const listItem = data.filter(e => Object.values(e).some(value => String(value).includes(searchWord)))
    if (listItem.length === 0) {
        res.json(data)
    }
    else {
        res.json(listItem)
    }
})

app.get('/documents/:id', (req, res) => {
    const foundId = data.find(x => x.id === parseInt(req.params.id));
    if (!foundId) {
        res.status(404).json("ID is not Availble")
    }
    else {
        res.json(foundId)
    }
});
app.post('/search', (req, res) => {
    const listItem = req.body.fields;
    const listFoundItem = data.filter((item) => {
        return Object.keys(listItem).some(key => {
            return item[key] === listItem[key];
        });
    });
    const searchWord = req.query.q
    if(searchWord && listItem){
     res.status(404).json("Query parameter and body request can't be request sametime")
    }
    else{
        res.json(listFoundItem);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})