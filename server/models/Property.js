const mongoose = require('mongoose');


const fileSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    originalname: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    }
});


const propertySchema = new mongoose.Schema({
    id: String,
    
    detailimage: [fileSchema],
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