import axios from "axios";

const addNewProduct = async (formData) => {
    try {
        const response = await axios.post(`http://localhost:8000/api/products`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        if (response.status === 201) {
            console.log(response.data);
        } else {
            console.error("Error adding new product:", response.responseText);
            throw new Error("Failed to add new product");
        }
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

export default addNewProduct;
