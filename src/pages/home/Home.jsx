import React from "react";
import { Link } from "react-router-dom";
import HomeInfo from "../../components/homeInfo/HomeInfo";
import SearchBox from "../../components/SearchBox/SearchBox";
import ProductList from "../../components/productList/ProductList";

const book = [
  {
    id: "657b4a916dca106a914924cb",
    title: "چگونه کمال‌گرا نبابیسبسیبسیبشیم؟",
    writer: "استفان گایز",
    image_src: "https://img.taaghche.com/frontCover/87012.jpg?w=150",
    publisher: "انتشارات شمشاد",
    price: 5000,
    rating: 4.0,
  },
  {
    id: "14a0cf67",
    title: "زیبا صدایم کن",
    writer: "فرهاد حسن‌زاده",
    image_src: "https://img.taaghche.com/frontCover/69510.jpg?w=150",
    publisher: "کانون پرورش فکری کودکان و نوجوانان",
    price: 4200,
    rating: 4.2,
  },
  {
    id: "8c4e1d9b",
    title: "بازمانده",
    writer: "چاک پالانیک",
    image_src: "https://img.taaghche.com/frontCover/38817.jpg?w=150",
    publisher: "مهرگان خرد",
    price: 12000,
    rating: 3.6,
  },
  {
    id: "61d29a55",
    title: "میشل‌ شدن",
    writer: "سودابه قیصری",
    image_src: "https://img.taaghche.com/frontCover/57160.jpg?w=150",
    publisher: "بنگاه ترجمه و نشر کتاب پارسه",
    price: 12000,
    rating: 3.4,
  },
  {
    id: "9b2e73d8",
    title: "دوشنبه‌هایی که تو را می‌دیدم",
    writer: "صدف محسنی",
    image_src: "https://img.taaghche.com/frontCover/45318.jpg?w=150",
    publisher: "بنگاه ترجمه و نشر کتاب پارسه",
    price: 30000,
    rating: 3.9,
  },
];

function Home() {
  return (
    <div className="h-full w-full flex flex-col bg-[#E8E8F4]">
      <Link to={"categorie"}>
        <img
          className="w-full"
          src="src/assets/banner/poster.png"
          alt="banner"
        />
      </Link>
      <div className="w-full flex flex-col justify-center px-[8.25%] gap-10 py-10">
        <HomeInfo />
        <SearchBox />
        <ProductList
          title={"پرفروش ترین کتاب ها"}
          subtitle={"بهترین کتاب های دنیا"}
          books={book}
        />
        <ProductList
          title={"ارزان ترین کتاب ها"}
          subtitle={"بهترین کتاب های دنیا"}
          books={book}
        />
      </div>
    </div>
  );
}

export default Home;
