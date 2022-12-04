import { useState } from "react";
import Calendar from "react-calendar";
import { BsCalendar2Event } from "react-icons/bs";
import "react-calendar/dist/Calendar.css";
export default function DateSearch({ setSearchTerms }) {
  const [value, setValue] = useState(new Date());

  const onChange = (val) => {
    setValue(val);
    const day = val.toString().split(" ")[0];
    const month = val.toString().split(" ")[1];
    const date = parseInt(val.toString().split(" ")[2]);
    const year = parseInt(val.toString().split(" ")[3]);
    const monthNum = new Date(val).getUTCMonth() + 1;
    // console.log(monthNum);
    setMoveInDate(`${date} ${month}, ${day}, ${year}`);
    setSearchTerms((prev) => ({
      ...prev,
      date: `${monthNum}-${date}-${year}`,
    }));
    setShowCalendar(false);
  };

  const [showCalendar, setShowCalendar] = useState(false);
  const [moveInDate, setMoveInDate] = useState("");
  return (
    <div className="relative w-full md:w-1/2 lg:w-1/4">
      <p className="font-poppins text-xs text-gray-400">When</p>

      <p
        className="font-poppins font-bold text-gray-700 cursor-pointer flex items-center gap-x-4"
        onClick={() => setShowCalendar((prev) => !prev)}
      >
        {!moveInDate ? "Select Move-in Date" : moveInDate}
        <BsCalendar2Event className="fill-indigo-500" />
      </p>

      {showCalendar && (
        <div className="absolute z-[10000] mx-auto right-0 top-[120%] [&>div]:shadow-md">
          <Calendar onChange={onChange} value={value} minDate={new Date()} />
        </div>
      )}
    </div>
  );
}
