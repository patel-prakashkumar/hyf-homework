
const { json } = require("express");
const express = require("express");
const app = express();
const data = require("./document.json");
const port = process.env.PORT || 3000;
app.use(express.json())
app.get('/', (req, res) => {
    res.send('This is a search engine')
})
/* 
app.get('/search', (req, res) => {
 const searchWord = req.query.q
 const listItem = [];
  data.forEach(element => {
    let itemFound = false;
        Object.keys(element).forEach(elementKey => {
            if(new String(element[elementKey]).includes(searchWord) && !itemFound){
               listItem.push(element)
               itemFound = true;
            }
        
        });
    });
    if(listItem.length === 0){
    res.status(404).json("Search Word is not availbel in Data")
    }
    else{
        res.json(listItem)
    }
}) */

app.get('/search', (req, res) => {
    const searchWord = req.query.q
    const listItem = data.filter(e => Object.values(e).some(value => String(value).includes(searchWord)))
    if (listItem.length === 0) {
        res.status(404).json("Search Word is not availbel in Data")
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
    console.log(listFoundItem)
    res.json(listFoundItem);

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})