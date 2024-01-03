import axios from "axios";

const getProductById = async (productId) => {
    try {
        const response = await axios.get(`https://clean-bat-cape.cyclic.app/api/products/${productId}`);

        if (response.status === 200) {
            const product = response;
            return product;
        } else {
            console.error("Error fetching data:", response.statusText);
            throw new Error("Failed to fetch data");
        }
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
    }
};

export default getProductById;
