import { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import properties from "../../data.json";

export default function LocationSearch() {
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

  const [showSearch, setShowSearch] = useState(false);
  const [currentTerm, setCurrentTerm] = useState(items[0]?.name);

  console.log(items);

  const handleOnSelect = (item) => {
    setCurrentTerm(item.name);
    setShowSearch(false);
  };

  const formatResult = (item) => {
    return (
      <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
    );
  };

  return (
    <div className="locationSearch flex-1">
      <p className="font-poppins text-xs text-gray-400">Where</p>
      {showSearch ? (
        <ReactSearchAutocomplete
          items={items}
          onSelect={handleOnSelect}
          formatResult={formatResult}
          inputSearchString={currentTerm}
          showIcon={false}
          onClear={() => {
            setShowSearch(false);
          }}
          styling={{
            borderRadius: "8px",
            boxShadow: "unset",
            zIndex: 100000,
            // border: "0px",
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
