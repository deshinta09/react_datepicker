import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DropDown from "./components/DropDown";

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

  const formatDate = (date) =>
    `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

  return (
    <>
      <form action="" className="grid justify-center items-center">
        <div className="grid">
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
          <div className="p-6">
            <h1 className="mb-4">Drop Down Checkbox Example</h1>
            <DropDown
              options={options}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
