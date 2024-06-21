import axios from "axios";

const addNewComment = async (formData) => {
  try {
    const response = await axios.post(
      `http://localhost:8000/api/products/comment`,
      formData
    );
    if (response.status === 201) {
      console.log(response.data);
    } else {
      console.error("Error adding new comment:", response.responseText);
      throw new Error("Failed to add new comment");
    }
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export default addNewComment;
