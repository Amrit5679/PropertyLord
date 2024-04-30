import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import axios from 'axios';

const PropertyForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        detailimage: [],
        shortTitle: '',
        longTitle: '',
        mrp: '',
        discount: '',
        cost: '',
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
        setFormData(prevState => ({
            ...prevState,
            detailimage: files
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSubmit = new FormData();
            formDataToSubmit.append('id', formData.id);
            formData.detailimage.forEach(file => {
                formDataToSubmit.append('detailimage', file);
            });
            formDataToSubmit.append('shortTitle', formData.shortTitle);
            formDataToSubmit.append('longTitle', formData.longTitle);
            formDataToSubmit.append('mrp', formData.mrp);
            formDataToSubmit.append('discount', formData.discount);
            formDataToSubmit.append('cost', formData.cost);
            formDataToSubmit.append('location', formData.location);
            formDataToSubmit.append('category', JSON.stringify(formData.category));
            formDataToSubmit.append('description', formData.description);
            formDataToSubmit.append('facilities', JSON.stringify(formData.facilities));

            const response = await axios.post('http://localhost:4000/api/property', formDataToSubmit, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            setFormData({
                id: '',
                detailimage: [],
                shortTitle: '',
                longTitle: '',
                mrp: '',
                discount: '',
                cost: '',
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
               Plot No:
                <input type="text" name="id" value={formData.id} onChange={handleChange} />
            </label>
            
            <label>
                Detail Image files:
                <input type="file" name="detailimage" onChange={handleImageChange} multiple />
                {formData.detailimage.map((file, index) => (
                    <div key={index}>{file.name}</div>
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
                <input type="text" name="mrp" value={formData.mrp} onChange={handleChange} />
            </label>
            <label>
                Price Discount:
                <input type="text" name="discount" value={formData.discount} onChange={handleChange} />
            </label>
            <label>
                Price Cost:
                <input type="text" name="cost" value={formData.cost} onChange={handleChange} />
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
                <textarea name="description" value={formData.description} onChange={handleChange} className='border rounded-md w-full p-2 mt-1 focus:outline-none focus:border-blue-500' />
            </label>

            <label className='mt-2'>
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
