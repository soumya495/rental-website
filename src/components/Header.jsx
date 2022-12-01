import { MdHouseSiding } from "react-icons/md";

export default function Header() {
  return (
    <header class="text-gray-600 body-font border-b border-b-gray-200 bg-white">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div className="bg-indigo-500 w-10 h-10 rounded-full grid place-items-center">
            <MdHouseSiding fill="#fff" fontSize={30} />
          </div>
          <span class="ml-3 text-xl">Property</span>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 text-indigo-500 hover:text-indigo-600 cursor-pointer">
            Rent
          </a>
          <a class="mr-5 hover:text-gray-900 cursor-pointer">Buy</a>
          <a class="mr-5 hover:text-gray-900 cursor-pointer">Sell</a>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Dashboard
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
