import React from "react";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";
import HomeInfo from "../../components/homeInfo/HomeInfo";
import SearchBox from "../../components/SearchBox/SearchBox";
import ProductList from "../../components/productList/ProductList";
import { useQuery } from "@tanstack/react-query";
import getAllProduct from "../../Api/GetAllProduct";
import getAllCategorie from "../../Api/GetAllCategorie";

function Home() {
  const { isSuccess: categoriesFetch, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategorie(),
  });
  const {
    isLoading,
    isSuccess,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProduct(1, 100),
  });
  if (isLoading) {
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  } else if (isSuccess && categoriesFetch) {
    return (
      <div className="h-full w-full flex flex-col bg-[#E8E8F4]">
        <Link to={`categorie/ALL`}>
          <img
            className="w-full"
            src="src/assets/banner/poster.png"
            alt="banner"
          />
        </Link>
        <div className="w-full flex flex-col justify-center px-[8.25%] gap-10 py-10">
          <HomeInfo />
          {categories.data.data.categories.map((category) => {
            const temp = products.data.data.products.filter(
              (product) => product.category._id === category._id
            );
            if (temp.length) {
              return (
                <ProductList
                  key={category._id}
                  category={category._id}
                  title={category.name}
                  subtitle={"temp.subcategory.name"}
                  books={temp}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Home;
