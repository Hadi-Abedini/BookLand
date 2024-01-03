import axios from "axios";

const getAllOrder = async (sort = "-createdAt", deliveryStatus = true, limit = 5, page = 1) => {
    try {
        const response = await axios.get("https://clean-bat-cape.cyclic.app/api/orders", {
            params: {
                sort: sort,
                limit: limit,
                page: page,
                deliveryStatus: deliveryStatus
            },
        });

        if (response.status === 200) {
            const orders = response;
            return orders;
        } else {
            console.error("Error fetching data:", response.statusText);
            throw new Error("Failed to fetch data");
        }
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
    }
};

export default getAllOrder;
