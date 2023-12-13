import axios from "axios";

const getAllSubcategoriesByCategoriesId = async (categoriesId) => {
    try {
        const response = await axios.get("http://localhost:8000/api/subcategories", {
            params: {
                category: categoriesId
            }
        });

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

export default getAllSubcategoriesByCategoriesId;
