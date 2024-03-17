const mongoose = require('mongoose');


const propertySchema = new mongoose.Schema({
    id: String,
    propertyimage: String,
    detailimage: Object,
    title: {
        shortTitle: String,
        longTitle: String
    },
    price: {
        mrp: String,
        discount: String,
        cost: String
    },
    location: String,
    category: [String],
    description: String,
    discount: String,
    facilities: [String]
}, { timestamps: true });




const Property = mongoose.model('property', propertySchema);

module.exports = Property;
