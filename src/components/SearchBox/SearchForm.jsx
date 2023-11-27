import React from "react";

import textContent from "../../constants/string";
import SearchInput from "./SearchInput";
import SearchDropDownBtn from "./SearchDropDownBtn";
import SearchBtn from "./SearchBtn";

const category = [
  "رمان",
  "داستان علمی تخیلی",
  "رازنگار",
  "رمان تاریخی",
  "رمان عاشقانه",
  "داستان کودکانه",
  "فانتزی",
];

function SearchForm() {
  const [slectedCategory, setSlectedCategory] = useState("");
  const [slectedPublisher, setSlectedPublisher] = useState("");
  return (
    <form className="w-full flex flex-col justify-between items-center gap-10">
      <div className="w-full flex flex-row justify-between items-center gap-4">
        <SearchDropDownBtn
          id={"book-category"}
          text={textContent.search_option[0]}
          selectedOption={slectedCategory}
          setSelectedOption={setSlectedCategory}
          optionList={category}></SearchDropDownBtn>
        <SearchInput
          id={"book_name"}
          placeholder={textContent.search_option[1]}></SearchInput>
        <SearchInput
          id={"writer_name"}
          placeholder={textContent.search_option[2]}></SearchInput>
        <SearchDropDownBtn
          id={"book-publisher"}
          text={textContent.search_option[3]}
          selectedOption={slectedPublisher}
          setSelectedOption={setSlectedPublisher}
          optionList={category}></SearchDropDownBtn>
      </div>
      <SearchBtn text={textContent.search_submit_btn}></SearchBtn>
    </form>
  );
}

export default SearchForm;
