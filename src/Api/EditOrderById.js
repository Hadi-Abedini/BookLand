import axios from "axios";

const editOrderById = async (data, orderId) => {
    try {
        const response = await axios.patch(`http://localhost:8000/api/orders/${orderId}`, data);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

export default editOrderById;
