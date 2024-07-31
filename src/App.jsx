import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [popUpDate, setPopUpDate] = useState(false);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  // console.log({ startDate, endDate }, "<<< date");
  // console.log(
  //   `${startDate.getDate()}-${startDate.getMonth()}-${startDate.getFullYear()}`,
  //   "<<< type of"
  // );

  const formatDate = (date) =>
    `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

  return (
    <>
      <form action="" className="grid justify-center items-center">
        {/* <label htmlFor="date-range" onClick={() => setPopUpDate(true)}>
          start date {formatDate(startDate)} end date {formatDate(endDate)}
        </label> */}
        <div className="grid">
          {/* <label htmlFor="date">
            {formatDate(startDate)} to {formatDate(endDate)}
          </label> */}
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
        </div>
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
