import FilterForm from "./components/FilterForm";
import Header from "./components/Header";
import PropertyList from "./components/PropertyList";

function App() {
  return (
    <div className="bg-indigo-100 bg-opacity-40 min-h-screen">
      <Header />
      <div className="container mx-auto xl:max-w-[1200px] px-5">
        <div className="mt-12">
          <h2 className="font-poppins text-center md:text-start text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
            Search properties to rent
          </h2>
        </div>
        <FilterForm />
        <PropertyList />
      </div>
    </div>
  );
}

export default App;
