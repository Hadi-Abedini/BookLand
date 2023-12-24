import React from "react";
import SearchInput from "../../components/SearchBox/SearchInput";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import DatePickerInput from "../../components/SearchBox/DatePickerInput";

function Shipping() {
  return (
    <div className="p-7 flex flex-col gap-5">
      <span className="text-2xl font-[rokh-bold] ">نهایی کردن خرید</span>

      <form className="flex flex-col gap-3">
        <div className="flex gap-4">
          <div className="w-1/5 flex flex-col gap-1">
            <span>نام:</span>
            <SearchInput
              id={"firstName"}
              placeholder={"نام"}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
          </div>
          <div className="w-1/5 flex flex-col gap-1">
            <span>نام خانوادگی:</span>
            <SearchInput
              id={"lastName"}
              placeholder={"نام خانوادگی"}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-1/5 flex flex-col gap-1">
            <span>آدرس:</span>
            <SearchInput
              id={"address"}
              placeholder={"آدرس"}
              onChange={(e) => handleInputChange("address", e.target.value)}
            />
          </div>
          <div className="w-1/5 flex flex-col gap-1">
            <span>تلفن همراه:</span>
            <SearchInput
              id={"phone"}
              type="number"
              placeholder={"تلفن همراه"}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>
        </div>
        <div className="w-1/5 flex flex-col gap-1">
          <span>تاریخ دریافت سفارش:</span>
          <DatePicker
            render={<DatePickerInput />}
            minDate={new Date()}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            value={new Date()}
          />
        </div>
      </form>
    </div>
  );
}

export default Shipping;
