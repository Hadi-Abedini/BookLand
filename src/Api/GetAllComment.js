import axios from "axios";

const getAllComment = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/products/comment/${id}`
    );

    if (response.status === 200) {
      const products = response;

      return products;
    } else {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export default getAllComment;
