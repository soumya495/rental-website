import { useState } from "react";
import properties from "../../data.json";
import { nFormatter } from "../../numFormatter";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

export default function PriceSearch() {
  let minPrice = properties[0].property_rent;
  let maxPrice = properties[0].property_rent;
  properties.forEach((property) => {
    if (property.property_rent < minPrice) minPrice = property.property_rent;
    if (property.property_rent > maxPrice) maxPrice = property.property_rent;
  });

  const [showRange, setShowRange] = useState(false);
  const [value, setValue] = useState({
    min: minPrice,
    max: maxPrice,
  });

  const minMaxPrice = `₹${nFormatter(value.min)} - ₹${nFormatter(value.max)}`;

  return (
    <div className="flex-1 relative">
      <p className="font-poppins text-xs text-gray-400">Price</p>
      {showRange && (
        <div className="absolute top-[80%] right-0 w-full px-8 pb-4 pt-9 shadow-lg rounded-md flex flex-col items-center justify-between h-32 bg-white z-[10000] m-4 mt-5 [&>div>span>span]:font-poppins [&>div>span>span]:text-xs [&>div>span>span]:font-bold [&>div>div>span>span]:font-poppins [&>div>div>span>span]:text-xs">
          <InputRange
            maxValue={maxPrice}
            minValue={minPrice}
            value={value}
            onChange={(value) => setValue(value)}
            step={1000}
          />
          <button
            onClick={() => setShowRange(false)}
            className="cursor-pointer font-poppins bg-indigo-500 text-white text-xs uppercase font-semibold p-1 px-4 rounded-md"
          >
            Select
          </button>
        </div>
      )}
      <p
        className="font-poppins font-bold text-gray-700 cursor-pointer select-none"
        onClick={() => setShowRange((prev) => !prev)}
      >
        {minMaxPrice}
      </p>
    </div>
  );
}
