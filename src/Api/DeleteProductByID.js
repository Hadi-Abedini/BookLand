import axios from "axios";

const deleteProductById = async (productId) => {
    const storedToken = localStorage.getItem("token");
    try {
        const response = await axios.delete(`https://clean-bat-cape.cyclic.app/api/products/${productId}`, {
            headers: {
                'Authorization': `Bearer ${storedToken}`,
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
