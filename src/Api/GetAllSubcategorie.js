import axios from "axios";

const getAllSubcategorie = async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/subcategories");

        if (response.status === 200) {
            const subcategories = response;
            return subcategories;
        } else {
            console.error("Error fetching data:", response.statusText);
            throw new Error("Failed to fetch data");
        }
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
    }
};

export default getAllSubcategorie;
