import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DropDown from "./components/DropDown";
import "flowbite";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
// material ui
import {
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
  OutlinedInput,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

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
  // material ui
  const [personName, setPersonName] = useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const validatePhone = (value) => {
    const phoneRegex = /^[0-9]{10,15}$/;
    setIsValid(phoneRegex.test(value));
    setPhoneNumber(value);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form action="" className="grid gap-3">
          <div className="grid gap-5">
            {/* material ui */}
            <div>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) =>
                    selected.length > 1
                      ? `${selected.length} option`
                      : selected[0]
                  }
                  MenuProps={MenuProps}
                  sx={{ borderRadius: "100px" }}
                  className="focus:outline-none focus:ring-2 ring-[#D2AD83] hover:outline-none hover:ring-2"
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            {/* material ui end */}

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

            {/* flatpickr */}
            <Flatpickr options={optionFlatpickr} />
            {/* flatpickr end */}

            {/* flatpickr select radio */}
            <button
              id="dropdownHelperRadioButton"
              data-dropdown-toggle="dropdownHelperRadio"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Dropdown radio{" "}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* Dropdown menu */}
            <div
              id="dropdownHelperRadio"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600"
              data-popper-reference-hidden=""
              data-popper-escaped=""
              data-popper-placement="top"
              style={{
                position: "absolute",
                inset: "auto auto 0px 0px",
                margin: "0px",
                transform: "translate3d(522.5px, 6119.5px, 0px)",
              }}
            >
              <ul
                className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHelperRadioButton"
              >
                <li>
                  <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <div className="flex items-center h-5">
                      <input
                        id="helper-radio-4"
                        name="helper-radio"
                        type="radio"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                    </div>
                    <div className="ms-2 text-sm">
                      <label
                        htmlFor="helper-radio-4"
                        className="font-medium text-gray-900 dark:text-gray-300"
                      >
                        Individual
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <div className="flex items-center h-5">
                      <input
                        id="helper-radio-5"
                        name="helper-radio"
                        type="radio"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                    </div>
                    <div className="ms-2 text-sm">
                      <label
                        htmlFor="helper-radio-5"
                        className="font-medium text-gray-900 dark:text-gray-300"
                      >
                        Company
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <div className="flex items-center h-5">
                      <input
                        id="helper-radio-6"
                        name="helper-radio"
                        type="radio"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                    </div>
                    <div className="ms-2 text-sm">
                      <label
                        htmlFor="helper-radio-6"
                        className="font-medium text-gray-900 dark:text-gray-300"
                      >
                        Non profit
                      </label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* flatpickr select radio end */}

            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 text-gray-700">
                Nomor Telepon:
              </label>
              <input
                className={`px-4 py-2 rounded-md focus:outline-none ${
                  isValid ? "ring-0" : "focus:ring-2 focus:ring-red-500"
                }`}
                type="tel"
                name="telphone"
                placeholder="888 888 8888"
                pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                onKeyUp={(e) => validatePhone(e.target.value)}
                maxlength="12"
                title="Ten digits code"
                required
              />
              {/* <input
                type="tel"
                id="phone"
                // value={phoneNumber}
                onKeyUp={(e) => validatePhone(e.target.value)}
                className={`px-4 py-2 rounded-md focus:outline-none ${
                  isValid ? "ring-0" : "focus:ring-2 focus:ring-red-500"
                }`}
                placeholder="Masukkan nomor telepon"
              /> */}
              {!isValid && (
                <span className="text-red-500 text-sm mt-1">
                  Nomor telepon tidak valid.
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
