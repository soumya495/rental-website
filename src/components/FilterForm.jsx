import DateSearch from "./Filter/DateSearch";
import LocationSearch from "./Filter/LocationSearch";

export default function FilterForm() {
  return (
    <div className="mt-12 bg-white p-4 px-8 max-w-[1000px] mx-auto rounded-xl shadow-sm flex justify-between items-center">
      <LocationSearch />
      <div className="h-[60px] w-[0.09rem] bg-gray-200 mx-4"></div>
      <DateSearch />
    </div>
  );
}
