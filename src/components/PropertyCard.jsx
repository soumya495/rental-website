import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { SlLocationPin } from "react-icons/sl";
import { RiHotelBedFill } from "react-icons/ri";
import { MdShower } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { BsStars } from "react-icons/bs";

export default function PropertyCard({ property }) {
  const {
    property_name,
    property_img,
    property_rent,
    property_location,
    property_type,
    bedrooms,
    bathroom,
    dimensions,
    is_popular,
  } = property;

  return (
    <div className="max-w-[400px] bg-white rounded-md overflow-hidden shadow-sm">
      <div className="w-full relative">
        <LazyLoadImage
          src={property_img}
          alt={property_name}
          placeholderSrc={property_img}
          className="img-lazy w-full"
          effect="blur"
        />
        {is_popular === "true" && (
          <div className="absolute bg-indigo-500 -bottom-1 flex p-2 px-3 items-center space-x-1 rounded-r-md shadow-lg">
            <BsStars className="fill-white rotate-180" />
            <p className="font-poppins text-white font-bold uppercase text-xs">
              Popular
            </p>
          </div>
        )}
      </div>
      <div className="p-4 px-4">
        <p className="font-poppins text-gray-400 text-sm tracking-wider">
          <span className="text-xl font-semibold text-indigo-500">
            ₹{property_rent}
          </span>
          /month
        </p>
        <p className="text-2xl font-poppins font-bold text-gray-700 mb-1">
          {property_name}
        </p>
        <p className="text-sm font-poppins font text-gray-400 flex items-center mb-4 gap-x-1">
          <SlLocationPin /> {property_location} | {property_type}
        </p>
        <hr className="w-[95%] mx-auto" />
        <div className="mt-4 flex items-center justify-between flex-wrap gap-y-2">
          <div className="flex items-center space-x-1 mx-auto">
            <RiHotelBedFill className="fill-indigo-500 text-xl" />
            <p className="font-poppins text-xs text-gray-400">
              {bedrooms} beds
            </p>
          </div>
          <div className="flex items-center space-x-1 mx-auto">
            <MdShower className="fill-indigo-500 text-xl" />
            <p className="font-poppins text-xs text-gray-400">
              {bathroom} bathrooms
            </p>
          </div>
          <div className="flex items-center space-x-1 mx-auto">
            <RxDimensions className="text-indigo-500 text-xl" />
            <p className="font-poppins text-xs text-gray-400">
              {dimensions} m<sup>2</sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
