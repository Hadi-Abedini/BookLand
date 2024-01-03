import axios from "axios";

const addOrder = async (data) => {
    try {
        const response = await axios.post(`https://clean-bat-cape.cyclic.app/api/orders`, data);

        if (response.status === 201) {
            console.log(response.data);
        } else {
            console.error("Error:", response.statusText);
            throw new Error("Failed to delete data");
        }
    } catch (error) {
        console.error("Error:", error.message);
        throw error;
    }
};

export default addOrder;
