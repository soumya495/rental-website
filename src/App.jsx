import { useEffect, useRef } from "react";
import { useState } from "react";
import FilterForm from "./components/FilterForm";
import Header from "./components/Header";
import PropertyList from "./components/PropertyList";
import data from "./data.json";

function App() {
  const [searchTerms, setSearchTerms] = useState({
    location: null,
    date: null,
    maxPrice: null,
    minPrice: null,
    propertyType: null,
  });
  const [properties, setProperties] = useState(data);
  const displayRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  const { location, date, maxPrice, minPrice, propertyType } = searchTerms;
  const checkIfSearchSelected =
    location || date || maxPrice || minPrice || propertyType;

  return (
    <div className="bg-indigo-100 bg-opacity-40 min-h-screen">
      <Header />
      <div className="container mx-auto xl:max-w-[1200px] px-5">
        <FilterForm
          setLoading={setLoading}
          displayRef={displayRef}
          searchTerms={searchTerms}
          setSearchTerms={setSearchTerms}
          setProperties={setProperties}
        />
        <PropertyList
          loading={loading}
          properties={properties}
          displayRef={displayRef}
        />
      </div>
    </div>
  );
}

export default App;
