import axios from "axios";

const addNewSubCategory = async (transform) => {
  const storedToken = localStorage.getItem("token");
  try {
    const response = await axios.post(
      `http://localhost:8000/api/subcategories`,
      transform,
      {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      }
    );
    if (response.status === 201) {
      console.log(response.data);
    } else {
      console.error("Error adding new subcategory:", response.responseText);
      throw new Error("Failed to add new subcategory");
    }
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export default addNewSubCategory;
