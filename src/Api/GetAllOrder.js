import axios from "axios";

const getAllOrder = async (sort = "-createdAt") => {
    try {
        const response = await axios.get("http://localhost:8000/api/orders", {
            params: {
                sort:sort
            },
        });

        if (response.status === 200) {
            const orders = response.data.data.orders;
            await Promise.all(
                orders.map(async (order) => {
                    const userResponse = await axios.get(`http://localhost:8000/api/users/${order.user}`);
                    order.userName = `${userResponse.data.data.user.firstname} ${userResponse.data.data.user.lastname}`;
                })
            );

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
