import { useState } from "react";
import Calendar from "react-calendar";
import { BsCalendar2Event } from "react-icons/bs";
import "react-calendar/dist/Calendar.css";
export default function DateSearch() {
  const [value, setValue] = useState(new Date());

  const onChange = (val) => {
    setValue(val);
    const day = val.toString().split(" ")[0];
    const month = val.toString().split(" ")[1];
    const date = val.toString().split(" ")[2];
    const year = val.toString().split(" ")[3];
    // console.log(`${date} ${month}, ${day} ${year}`);
    setMoveInDate(`${date} ${month}, ${day}, ${year}`);
    setShowCalendar(false);
  };

  const [showCalendar, setShowCalendar] = useState(false);
  const [moveInDate, setMoveInDate] = useState("");
  return (
    <div className="relative flex-1">
      <p className="font-poppins text-xs text-gray-400">When</p>

      <p
        className="font-poppins font-bold text-gray-700 cursor-pointer flex items-center gap-x-4"
        onClick={() => setShowCalendar(true)}
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
