import React, { useState, useEffect, useCallback } from "react";
import addCommasToNumber from "../../utils/AddCommasToNumber";

function InputBtn({
  value,
  status = true,
  productId,
  type,
  changeList,
  setChangeList,
}) {
  const [isBtn, setIsBtn] = useState(status);
  const [inputValue, setInputValue] = useState(value);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const updatedList = [
        ...changeList,
        { id: productId, value: inputValue, type: type },
      ];
      setChangeList(updatedList);
    },
    [changeList, setChangeList, productId, type, inputValue]
  );

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Escape") {
        setIsBtn(true);
        setInputValue(value);
        setChangeList([]);
      }
    },
    [setIsBtn]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <form action="" onSubmit={handleSubmit}>
      {isBtn ? (
        <button onClick={() => setIsBtn(false)}>
          {addCommasToNumber(value)}
        </button>
      ) : (
        <input
          name=""
          className="w-28 text-center"
          value={inputValue}
          type="number"
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
    </form>
  );
}

export default InputBtn;
