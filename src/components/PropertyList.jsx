import properties from "../data.json";
import PropertyCard from "./PropertyCard";

export default function PropertyList() {
  return (
    <div className="grid grid-cols-1 justify-items-center md:justify-items-stretch md:grid-cols-2 lg:grid-cols-3 gap-20 py-12 items-start">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
