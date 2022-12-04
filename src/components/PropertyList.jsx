import PropertyCard from "./PropertyCard";
import { motion, AnimatePresence } from "framer-motion";

export default function PropertyList({ properties, displayRef, loading }) {
  if (loading) {
    return (
      <AnimatePresence>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center mt-10 gap-y-10 py-12"
        >
          <img src="/searching.svg" className="max-w-[200px]" />
          <p className="font-poppins text-3xl text-center text-gray-700 font-semibold">
            Searching Properties ...
          </p>
        </motion.div>
      </AnimatePresence>
    );
  }

  if (!properties.length) {
    return (
      <div className="flex flex-col items-center mt-10 gap-y-10 py-12">
        <img src="/not_found.svg" className="max-w-[500px]" />
        <p className="font-poppins text-4xl text-gray-700 font-semibold">
          No Properties Found !
        </p>
      </div>
    );
  }

  return (
    <motion.div
      ref={displayRef}
      layout
      className="grid grid-cols-1 justify-items-center md:justify-items-stretch md:grid-cols-2 lg:grid-cols-3 gap-20 py-12 items-start -scroll-mt-[1rem]"
    >
      {properties.map((property) => (
        <AnimatePresence>
          <PropertyCard key={property.id} property={property} />
        </AnimatePresence>
      ))}
    </motion.div>
  );
}
