import DateSearch from "./Filter/DateSearch";
import LocationSearch from "./Filter/LocationSearch";
import PriceSearch from "./Filter/PriceSearch";
import PropertyTypeSearch from "./Filter/PropertyTypeSearch";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useEffect } from "react";
import data from "../data.json";
import { MdClear } from "react-icons/md";

export default function FilterForm({
  setLoading,
  displayRef,
  searchTerms,
  setSearchTerms,
  setProperties,
}) {
  const { location, date, maxPrice, minPrice, propertyType } = searchTerms;
  const checkIfSearchSelected =
    location || date || maxPrice || minPrice || propertyType;

  const [showSearch, setShowSearch] = useState(checkIfSearchSelected);

  // show search only when atleast one searh term is selected
  useEffect(() => {
    if (checkIfSearchSelected) setShowSearch(true);
  }, [location, date, maxPrice, minPrice, propertyType]);

  const handleSearch = () => {
    let searchResult = [];
    if (location && location !== "All India") {
      searchResult = data.filter((property) => {
        if (property.property_location === location) return property;
      });
    }

    if (date) {
      let arr = searchResult.length > 0 ? searchResult : data;
      searchResult = arr.filter((property) => {
        const propDate = new Date(property.movein_date);
        const userDate = new Date(date);
        if (userDate >= propDate) {
          return property;
        }
      });
    }

    if (maxPrice && minPrice) {
      let arr = searchResult.length > 0 ? searchResult : data;
      searchResult = arr.filter((property) => {
        if (
          property.property_rent >= minPrice &&
          property.property_rent <= maxPrice
        )
          return property;
      });
    }

    if (propertyType) {
      let arr = searchResult.length > 0 ? searchResult : data;
      searchResult = arr.filter((property) => {
        if (propertyType === "All") return property;
        if (property.property_type === propertyType) return property;
      });
    }

    displayRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
    setLoading(true);
    setProperties(searchResult);
  };

  return (
    <>
      <div className="mt-12">
        <h2 className="font-poppins text-center md:text-start text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
          Search properties to rent
        </h2>
      </div>
      <div className="mt-12 bg-white p-4 px-8 max-w-[1000px] mx-auto rounded-xl shadow-sm relative">
        {/* {checkIfSearchSelected && (
          <p
            onClick={() => {
              setSearchTerms({
                location: null,
                date: null,
                maxPrice: null,
                minPrice: null,
                propertyType: null,
              });
              setProperties(data);
              setShowSearch(false);
            }}
            className="absolute cursor-pointer -top-5 right-3 text-xs font-poppins uppercase text-gray-700 flex items-center gap-x-1"
          >
            Clear Filter{" "}
            <span className="border border-gray-700 rounded-full w-4 h-4 grid place-items-start">
              <MdClear className="inline text-sm" />
            </span>
          </p>
        )} */}
        <div className="hidden lg:flex justify-between items-center">
          <LocationSearch setSearchTerms={setSearchTerms} />
          <div className="h-[60px] w-[0.09rem] bg-gray-200 mx-4"></div>
          <DateSearch setSearchTerms={setSearchTerms} />
          <div className="h-[60px] w-[0.09rem] bg-gray-200 mx-4"></div>
          <PriceSearch setSearchTerms={setSearchTerms} />
          <div className="h-[60px] w-[0.09rem] bg-gray-200 mx-4"></div>
          <PropertyTypeSearch setSearchTerms={setSearchTerms} />
        </div>
        <div className="flex lg:hidden flex-col gap-y-2 md:gap-y-0">
          <div className="flex flex-col md:flex-row gap-y-2 md:gap-y-0">
            <LocationSearch setSearchTerms={setSearchTerms} />
            <div className="hidden md:block h-[60px] w-[0.09rem] bg-gray-200 mx-4"></div>
            <DateSearch setSearchTerms={setSearchTerms} />
          </div>
          <div className="hidden md:block h-[0.05rem] w-full bg-gray-200 mx-4 my-2"></div>
          <div className="flex flex-col md:flex-row gap-y-2 md:gap-y-0">
            <PriceSearch setSearchTerms={setSearchTerms} />
            <div className="hidden md:block h-[60px] w-[0.09rem] bg-gray-200 mx-4"></div>
            <PropertyTypeSearch setSearchTerms={setSearchTerms} />
          </div>
        </div>
      </div>
      <div
        className={`w-[100%] flex justify-center ${
          showSearch ? "visible mt-4 opacity-100" : "invisible opacity-0"
        } transition-all duration-100`}
      >
        <button
          onClick={() => handleSearch()}
          className="px-8 py-2 rounded-md bg-indigo-500 text-white font-poppins flex"
        >
          <span className="block">Search</span>
          <CiSearch className="inline text-2xl ml-3" />
        </button>
      </div>
    </>
  );
}
