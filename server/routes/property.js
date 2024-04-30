
const express = require('express');
const Property = require('../models/Property');
const multer = require('multer')

const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); 
    }
});
const uploads = multer({ storage: storage });
router.post('/property', uploads.array('detailimage'), async (req, res) => {
    try {
        console.log(req.body);
        const { id, shortTitle, longTitle, location, category, description, facilities, mrp, discount, cost } = req.body;
        const detailimage = req.files.map(file => ({ filename: file.filename, originalname: file.originalname, size: file.size }));
        const newProperty = new Property({
            id,
            title:{ shortTitle, longTitle },
            price:{ mrp, discount, cost },
            location,
            category,
            description,
            facilities,
            detailimage
        });
        console.log(req.body, req.files);
        await newProperty.save();

        res.status(201).json({ message: 'Property created successfully', property: newProperty });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

router.get('/property', async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

router.get('/property/:_id', async (req, res) => {
    try {
        const property = await Property.findById(req.params._id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

module.exports = router;