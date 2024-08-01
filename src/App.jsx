import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DropDown from "./components/DropDown";
import "flowbite";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const options = ["Option 1", "Option 2", "Option 3"];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const optionFlatpickr = {
    mode: "range",
    minDate: "today",
    dateFormat: "Y-m-d",
    disable: [
      {
        from: "2024-08-04",
        to: "2024-08-07",
      },
    ],
  };

  return (
    <>
      <form action="" className="grid justify-center items-center">
        <div className="grid">
          {/* date picker */}
          <DatePicker
            className="p-3 w-64"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={onChange}
            isClearable={false}
            dateFormat="d MMMM yyyy"
            placeholderText="Date Book"
          />
          {/* date picker end */}

          {/* drop down */}
          <div className="p-6">
            <h1 className="mb-4">Drop Down Checkbox Example</h1>
            <DropDown
              options={options}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />
          </div>
          {/* drop down end */}

          {/* flowbite */}
          <div
            id="date-range-picker"
            date-rangepicker="true"
            className="flex items-center"
          >
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                id="datepicker-range-start"
                name="start"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#D2AD83] focus:border-[#D2AD83] block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#D2AD83] dark:focus:border-[#D2AD83]"
                placeholder="Select date start"
              />
            </div>
          </div>
          {/* flowbite end */}
          <Flatpickr options={optionFlatpickr} />
          {/* flatpickr */}
          <div></div>
          {/* flatpickr end */}
        </div>
      </form>
    </>
  );
}

export default App;
