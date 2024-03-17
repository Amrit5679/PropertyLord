import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import axios from 'axios';

const PropertyForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        propertyimage: '',
        detailimage: [], 
        shortTitle: '',
        longTitle: '',
        prices: {
            mrp: '',
            discount: '',
            cost: ''
        },
        location: '',
        category: [],
        description: '',
        facilities: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            prices: {
                ...prevState.prices,
                [name]: value
            }
        }));
    };

    const handleFacilitiesChange = (selectedOptions) => {
        setFormData(prevState => ({
            ...prevState,
            facilities: selectedOptions.map(option => option.value)
        }));
    };

    const handleCategoryChange = (selectedOptions) => {
        setFormData(prevState => ({
            ...prevState,
            category: selectedOptions.map(option => option.value)
        }));
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const urls = files.map(file => URL.createObjectURL(file));
        setFormData(prevState => ({
            ...prevState,
            detailimage: urls
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const response = await axios.post('http://localhost:4000/api/property', formData);
            console.log(response.data);
            setFormData({
                id: '',
                propertyimage: '',
                detailimage: [],
                shortTitle: '',
                longTitle: '',
                prices: {
                    mrp: '',
                    discount: '',
                    cost: ''
                },
                location: '',
                category: [],
                description: '',
                facilities: []
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                ID:
                <input type="text" name="id" value={formData.id} onChange={handleChange} />
            </label>
            <label>
                Property Image file:
                <input type="file" name="propertyimage" onChange={handleImageChange} />
            </label>
            <label>
                Detail Image url:
                <input type="file" name="detailimage" onChange={handleImageChange} multiple />
                {formData.detailimage.map((image, index) => (
                    <img key={index} src={image} alt={`Detail Image ${index}`} style={{ maxWidth: '100px', maxHeight: '100px', margin: '5px' }} />
                ))}
            </label>
            <label>
                Short Title:
                <input type="text" name="shortTitle" value={formData.shortTitle} onChange={handleChange} />
            </label>
            <label>
                Long Title:
                <input type="text" name="longTitle" value={formData.longTitle} onChange={handleChange} />
            </label>
            <label>
                Price MRP:
                <input type="text" name="mrp" value={formData.prices.mrp} onChange={handlePriceChange} />
            </label>
            <label>
                Price Discount:
                <input type="text" name="discount" value={formData.prices.discount} onChange={handlePriceChange} />
            </label>
            <label>
                Price Cost:
                <input type="text" name="cost" value={formData.prices.cost} onChange={handlePriceChange} />
            </label>
            <label>
                Location:
                <input type="text" name="location" value={formData.location} onChange={handleChange} />
            </label>
            <label>
                Category:
                <CreatableSelect
                    isMulti
                    name="category"
                    value={formData.category.map(option => ({ value: option, label: option }))}
                    onChange={handleCategoryChange}
                    options={[
                        { value: 'sale', label: 'For Sale' },
                        { value: 'rent', label: 'For Rent' }
                    ]}
                />
            </label>
            <label>
                Description:
                <input type="textarea" name="description" value={formData.description} onChange={handleChange} className=' border rounded-md'/>
            </label>
            <label>
                Facilities:
                <CreatableSelect
                    isMulti
                    name="facilities"
                    value={formData.facilities.map(option => ({ value: option, label: option }))}
                    onChange={handleFacilitiesChange}
                    options={[
                       
                        { value: 'TV', label: 'TV' },
                        { value: 'Electricity', label: 'Electricity' },
                        { value: 'Wifi', label: 'Wifi' },
                        { value: 'Parking', label: 'Parking' },
                        { value: 'Beach view', label: 'Beach view' },
                        { value: 'Swimming pool', label: 'Swimming pool' },
                        { value: '24hrs Water', label: '24hrs Water' }
                    ]}
                />
            </label>
            <button className="bg-blue-500 mt-2" type="submit">Submit</button>
        </form>
    );
};

export default PropertyForm;
