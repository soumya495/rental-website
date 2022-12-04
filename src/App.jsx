import FilterForm from "./components/FilterForm";
import Header from "./components/Header";
import PropertyList from "./components/PropertyList";

function App() {
  return (
    <div className="bg-indigo-100 bg-opacity-40 min-h-screen">
      <Header />
      <div className="container mx-auto xl:max-w-[1200px] px-5">
        <FilterForm />
        <PropertyList />
      </div>
    </div>
  );
}

export default App;
