import axios from "axios";

const editProductById = async (formData, productId) => {
    const storedToken = localStorage.getItem("token");
    try {
        const response = await axios.patch(`https://clean-bat-cape.cyclic.app/api/products/${productId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${storedToken}`,
            },
        });
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

export default editProductById;
