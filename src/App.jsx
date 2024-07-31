import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState("");
  const [popUpDate, setPopUpDate] = useState(false);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  console.log({ startDate, endDate }, "<<< date");
  console.log(typeof startDate, "<<< type of");
  return (
    <>
      <form action="">
        {/* <label htmlFor="date-range" onClick={() => setPopUpDate(true)}>
          start date{startDate} end date {endDate}
        </label> */}
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />
        {/* {!popUpDate ? (
          ""
        ) : (
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />
        )} */}
      </form>
    </>
  );
}

export default App;
