import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";
import getAllProduct from "../../Api/GetAllProduct";
import getAllCategorie from "../../Api/GetAllCategorie";
import getAllSubcategorie from "../../Api/GetAllSubcategorie";
import ProductList from "../../components/productList/ProductList";

function Categorie() {
  const { ID, type } = useParams();
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategorie,
  });

  const { data: subcategories } = useQuery({
    queryKey: ["subcategories"],
    queryFn: getAllSubcategorie,
  });

  const {
    isLoading,
    isSuccess,
    data: products,
  } = useQuery({
    queryKey: ["product", ID, type],
    queryFn: () => getAllProduct(1, 100, type, ID),
  });

  if (isLoading) {
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  }

  const data = isSuccess ? products.data.data.products : [];
  const filter =
    type === "subcategory"
      ? subcategories.data.data.subcategories.find((item) => item._id == ID)
      : categories.data.data.categories.find((item) => item._id == ID);

  return (
    <div className="h-full w-full flex gap-8 px-8 py-10 bg-[#E8E8F4]">
      <div className="w-1/4 flex gap-1 flex-col rounded-lg p-4 bg-white">
        {categories.data.data.categories.map((category) => {
          return (
            <div key={category._id + "1"} className="flex flex-col">
              <NavLink
                to={`/categorie/${category._id}/category`}
                key={category._id + "1"}
                className="text-lg px-4 py-1 w-fit flex gap-2 items-center font-[sans-bold] text-black rounded">
                  <i class="fa fa-book"></i>
                {category.name}
              </NavLink>
              <div className="flex flex-col">
                {subcategories.data.data.subcategories
                  .filter(
                    (subcategory) => subcategory.category._id === category._id
                  )
                  .map((filteredSubcategory) => (
                    <NavLink
                      to={`/categorie/${filteredSubcategory._id}/subcategory`}
                      key={filteredSubcategory._id + "1"}
                      className="text-sm px-4 py-1 w-fit text-black rounded">
                      {filteredSubcategory.name}
                    </NavLink>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full">
        {data.length ? (
          <ProductList
            key={filter._id}
            category={filter._id}
            title={filter.name}
            books={data}
          />
        ) : (
          <span className="text-lg">چیزی برای نمایش وجود ندارد</span>
        )}
      </div>
    </div>
  );
}

export default Categorie;
