import axios from "axios";

const editProductById = async (formData, productId) => {
    try {
        const response = await axios.patch(`http://localhost:8000/api/products/${productId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status === 200) {
            console.log(response.data);
        } else {
            console.error("Error editing product:", response.data);
            throw new Error("Failed to edit product");
        }
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

export default editProductById;
