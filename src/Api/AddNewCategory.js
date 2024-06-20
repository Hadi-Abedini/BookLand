import axios from "axios";

const addNewCategory = async (formData) => {
    const storedToken = localStorage.getItem("token");
    try {
        const response = await axios.post(`http://localhost:8000/api/categories`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${storedToken}`,
            },
        });
        if (response.status === 201) {
            console.log(response.data);
        } else {
            console.error("Error adding new category:", response.responseText);
            throw new Error("Failed to add new category");
        }
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

export default addNewCategory;
