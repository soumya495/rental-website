import { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import properties from "../../data.json";

export default function LocationSearch({ setSearchTerms }) {
  let items = [];
  properties.forEach((property) => {
    let notPresent = true;
    items.forEach((item) => {
      if (property.property_location === item.name) notPresent = false;
    });
    if (notPresent) {
      items.push({ id: property.id, name: property.property_location });
    }
  });
  items.unshift({ id: 1919191, name: "All India" });

  const [showSearch, setShowSearch] = useState(false);
  const [currentTerm, setCurrentTerm] = useState("Choose Location");

  const handleOnSelect = (item) => {
    setCurrentTerm(item.name);
    setSearchTerms((prev) => ({
      ...prev,
      location: item.name,
    }));
    setShowSearch(false);
  };

  const formatResult = (item) => {
    return (
      <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
    );
  };

  return (
    <div className="locationSearch w-full md:w-1/2 lg:w-1/4">
      <p className="font-poppins text-xs text-gray-400">Where</p>
      {showSearch ? (
        <ReactSearchAutocomplete
          items={items}
          onSelect={handleOnSelect}
          formatResult={formatResult}
          inputSearchString={items[0]?.name}
          showIcon={false}
          onClear={() => {
            setShowSearch(false);
          }}
          styling={{
            borderRadius: "8px",
            boxShadow: "unset",
            zIndex: 100000,
            fontFamily: "Poppins",
            padding: 0,
            margin: 0,
          }}
        />
      ) : (
        <p
          className="font-poppins font-bold text-gray-700 cursor-pointer"
          onClick={() => setShowSearch(true)}
        >
          {currentTerm}
        </p>
      )}
    </div>
  );
}
