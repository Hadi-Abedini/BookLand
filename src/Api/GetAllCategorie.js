import axios from "axios";

const getAllCategorie = async () => {
    try {
        const response = await axios.get("https://clean-bat-cape.cyclic.app/api/categories");

        if (response.status === 200) {
            const categories = response;
            return categories;
        } else {
            console.error("Error fetching data:", response.statusText);
            throw new Error("Failed to fetch data");
        }
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
    }
};

export default getAllCategorie;
