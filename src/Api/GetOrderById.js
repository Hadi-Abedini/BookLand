import axios from "axios";

const getOrderById = async (orderId) => {
    try {
        const response = await axios.get(`http://localhost:8000/api/orders/${orderId}`);

        if (response.status === 200) {
            const order = response;
            return order;
        } else {
            console.error("Error fetching data:", response.statusText);
            throw new Error("Failed to fetch data");
        }
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
    }
};

export default getOrderById;
