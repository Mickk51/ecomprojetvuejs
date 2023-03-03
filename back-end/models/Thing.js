const mongoose = require("mongoose")

let thingSchema = mongoose.Schema({
    nom: { type: String, required: true},
    image : { type: String, required: true},
    description : { type: String, required: true},
    categorie: { type: String, required: true},
    prix: { type: Number, required: true},
    enStock : { type: Boolean, required: true},
    note: { type: Number, required: false}
})


module.exports = mongoose.model("Thing", thingSchema);