import axios from "axios";

const deleteProductById = async (productId) => {
    try {
        const response = await axios.delete(`http://localhost:8000/api/products/${productId}`, {
            headers: {
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmRlZWMwYTcyZmE5OTA5MmE0ZDc3YyIsImlhdCI6MTcwMjI0NjEyOCwiZXhwIjoxNzAyMzA2MTI4fQ.QXeE3bmRrvoOeNsuc2Wgw2WVJ8F1N4tmae_J4lt5O3Y`
            }
        });

        if (response.status === 200) {
            console.log(response.data);
        } else {
            console.error("Error deleting data:", response.statusText);
            throw new Error("Failed to delete data");
        }
    } catch (error) {
        console.error("Error deleting data:", error.message);
        throw error;
    }
};

export default deleteProductById;
