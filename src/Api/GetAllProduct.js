import axios from "axios";

const getAllProduct = async (limit = 5, page = 1) => {
  try {
    const response = await axios.get("http://localhost:8000/api/products", {
      params: {
        fields: '-rating,-createdAt,-updatedAt',
        sort: 'price',
        limit: limit,
        page: page
      },
    });

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

export default getAllProduct;
