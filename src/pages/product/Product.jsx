import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import parse from "html-react-parser";
import getProductById from "../../Api/GetProductById";
import "react-quill/dist/quill.snow.css";

function Product() {
  const { productID } = useParams();
  const {
    isLoading,
    isSuccess,
    data: product,
  } = useQuery({
    queryKey: ["product", productID],
    queryFn: () => getProductById(productID),
  });
  if (isSuccess) {
    return (
      <div className="">
        {/* <>{parse(product.data.data.product.description)}</> */}
      </div>
    );
  }
  return <>fcvds</>;
}

export default Product;
