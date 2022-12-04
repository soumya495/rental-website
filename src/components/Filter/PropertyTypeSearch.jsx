import { useState } from "react";
import Select from "react-tailwindcss-select";
import properties from "../../data.json";
export default function PropertyTypeSearch() {
  let options = [];
  properties.forEach((property) => {
    let notPresent = true;
    options.forEach((item) => {
      if (property.property_type === item.value) notPresent = false;
    });
    if (notPresent) {
      options.push({
        value: property.property_type,
        label: property.property_type,
      });
    }
  });

  const [selectedProperty, setSelectedProperty] = useState(
    "Choose Property Type"
  );
  const [showMenu, setShowMenu] = useState(false);

  const handleChange = (value) => {
    setSelectedProperty(value.value);
    setShowMenu(false);
  };

  return (
    <div className="flex-1 relative">
      <p className="font-poppins text-xs text-gray-400">Property Type</p>
      <div className="propertyTypeSelect">
        <Select
          value={{ value: selectedProperty, label: selectedProperty }}
          onChange={handleChange}
          options={options}
          menuIsOpen={showMenu}
        />
      </div>
    </div>
  );
}
