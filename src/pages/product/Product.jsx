import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import parse from "html-react-parser";
import { Rating, Spinner, Tooltip } from "flowbite-react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import "react-quill/dist/quill.snow.css";

import getProductById from "../../Api/GetProductById";
import "react-quill/dist/quill.snow.css";
import addCommasToNumber from "../../utils/AddCommasToNumber";
import Counter from "../../components/counter/Counter";
import CartContext from "../../Context/CartContext";
import toast, { Toaster } from "react-hot-toast";
const notifySuccess = () =>
  toast.success("محصول با موفقیت به سبد خرید افزوده شد.");

function Product() {
  const { cart, setCart } = useContext(CartContext);
  const { productID } = useParams();
  const [count, setCount] = useState(1);

  const {
    isLoading,
    isSuccess,
    data: product,
  } = useQuery({
    queryKey: ["product", productID],
    queryFn: () => getProductById(productID),
  });

  if (isLoading) {
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  }
  if (isSuccess) {
    const productInfo = product.data.data.product;
    return (
      <div className="flex flex-col w-full h-auto p-6">
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="/" icon={HiHome}>
            خانه
          </Breadcrumb.Item>
          <Breadcrumb.Item
            href={`/categorie/${productInfo.category._id}/category`}>
            {productInfo.category.name}
          </Breadcrumb.Item>
          <Breadcrumb.Item
            href={`/categorie/${productInfo.subcategory._id}/subcategory`}>
            {productInfo.subcategory.name}
          </Breadcrumb.Item>
          <Breadcrumb.Item>{productInfo.name}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="w-full pt-7 flex gap-7 mb-4">
          <img
            className="w-[200px] h-[324px]"
            src={`http://localhost:8000/images/products/images/${productInfo.images}`}
            alt="poster"
          />
          <div className="flex flex-col w-fit gap-3">
            <div className="flex flex-col gap-3">
              <div className="w-fit flex">
                <p className="w-full text-lg font-[sans-semibold]">
                  {productInfo.name}
                </p>
                <Rating className="flex fle gap-1">
                  <Rating.Star />
                  <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                    {productInfo.rating}
                  </p>
                </Rating>
              </div>
              <p className="text-lg">
                نویسنده: <span className="text-sm">{productInfo.writer}</span>
              </p>
              <p className="text-lg">
                ناشر: <span className="text-sm">{productInfo.publisher}</span>
              </p>
              <p className="text-lg">
                قیمت:
                <span className="text-sm">
                  {addCommasToNumber(productInfo.price)} ریال
                </span>
              </p>
            </div>
            <Counter
              max={productInfo.quantity}
              count={count}
              setCount={setCount}
            />
            <div className="w-full flex items-center gap-4 justify-between">
              <Tooltip content="افزودن به سبد خرید">
                <button
                  onClick={() => {
                    const temp = [...cart];
                    const existingProductIndex = temp.findIndex(
                      (item) => item.productId === productInfo._id
                    );

                    if (existingProductIndex !== -1) {
                      temp[existingProductIndex].count = count;
                    } else {
                      temp.push({
                        productId: productInfo._id,
                        name: productInfo.name,
                        price: productInfo.price,
                        count: count,
                        image: productInfo.images,
                      });
                    }
                    setCart(temp);
                    notifySuccess();
                  }}
                  className="flex flex-col items-center px-6 py-2 text-sm bg-[#4B429F] text-white rounded-lg">
                  <span>افزودن</span>
                </button>
              </Tooltip>
              <span className="">
                {addCommasToNumber(productInfo.price * count)}ریال
              </span>
            </div>
          </div>
        </div>

        <p className="w-full leading-8 text-sm">
          {parse(product.data.data.product.description)}
        </p>
        <Toaster position="top-left" reverseOrder={false} />
      </div>
    );
  }
}

export default Product;
