import axios from "axios";

const getUserByID = async (userId) => {
    try {
        const response = await axios.get(`https://clean-bat-cape.cyclic.app/api/users/${userId}`);

        if (response.status === 200) {
            const user = response;
            return user;
        } else {
            console.error("Error fetching data:", response.statusText);
            throw new Error("Failed to fetch data");
        }
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
    }
};

export default getUserByID;
