const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');
const mongoose = require('mongoose');

const HelpCard = require('./model/helpcardModel');

mongoose.connect('mongodb+srv://GlobalServerPrac:atHaLf7FtMqWha6e@cluster0.6ke0m0t.mongodb.net/frontend-assignment?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/makecard', async(req, res) => {
    try{
        const {id, title, description} = req.body
        const Newcard = new HelpCard({
            id,
            title,
            description
        })
        await Newcard.save()
        res.send(Newcard)
    }
    catch (e) {
        if (e.code === 11000) {
            res.status(400).send({ error: 'ID must be unique. The provided ID already exists.' });
        }
    }
})

app.get('/helpcards', async(req, res) =>{
    const findText = req.query.findtext
    const data = await HelpCard.find()
    if(findText !== 'undefined'){
        const filterdata = data.filter(d => 
            d.title.toLowerCase().includes(findText.toLowerCase()) || 
            d.description.toLowerCase().includes(findText.toLowerCase()))
        return res.send(filterdata)
    }
    return res.send(data)
})

app.get('/helpcard/:id', async(req, res) =>{
    const id = req.params.id;
    const data = await HelpCard.findOne({id: id});
    res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})