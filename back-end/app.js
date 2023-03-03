const express = require('express');
const Thing = require("./models/Thing.js")
const mongoose = require("mongoose")

const app = express();

mongoose.set('strictQuery', true) 
mongoose.connect('mongodb+srv://admin:admin123@monsieurbarbudb.eovtiux.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json())


app.get("/api/items/:id", (req, res) => {
  Thing.findOne({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(err => res.status(404).json({ err }))
})

app.delete("/api/items/:id", (req, res) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(res => res.status(200).json({ message : "Objet supprimé "}))
    .catch(err => res.status(400).json({ err }));
})

app.put("/api/items/:id" , (req, res) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id})
    .then(res => res.status(200).json({ message : "Objet modifié !"}))
    .catch(err => res.status(400).json({ err }))
})

app.post("/api/items", (req, res) => {
    const thing = new Thing({
    ...req.body
  });
  thing.save()
    .then(() => res.status(201).json({ message : "objet enregistré !"}))
    .catch(err => res.status(400).json({ err }));
})

app.get("/api/items", (req, res) => {
  Thing.find()
  .then(things => res.status(200).json(things))
  .catch(err => res.status(400).json({ err }))
})


module.exports = app;

