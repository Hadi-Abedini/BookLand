import axios from "axios";

const getAllProduct = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/products", {
      params: {
        fields: '-rating,-createdAt,-updatedAt,-__v',
        sort: 'price',
        'quantity[gte]': 8,
      },
    });

    if (response.status === 200) {
      const products = response.data.data.products;
      
      await Promise.all(
        products.map(async (product) => {
          const categoryResponse = await axios.get(`http://localhost:8000/api/categories/${product.category}`);
          product.categoryName = categoryResponse.data.data.category.name;

          const subcategoryResponse = await axios.get(`http://localhost:8000/api/subcategories/${product.subcategory}`);
          product.subcategoryName = subcategoryResponse.data.data.subcategory.name;
        })
      );

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
