import React, { useState } from "react";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [optCheck, setOptCheck] = useState([]);
  const [category, setCategory] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  // const [optionsSubVenue, setOptSubVenue] = useState(null);
  const optionsSubVenue = [
    { id: 1, name: "Sub-venue 1", time: 1 },
    { id: 2, name: "Sub-venue 2", time: 0 },
    { id: 3, name: "Sub-venue 3", time: 1 },
    { id: 4, name: "Sub-venue 4", time: 0 },
    { id: 5, name: "Sub-venue 5", time: 0 },
    { id: 6, name: "Sub-venue 6", time: 1 },
    { id: 7, name: "Sub-venue 7", time: 1 },
  ];

  const listSelected = (checkOption) =>
    checkOption.length > 1
      ? `${checkOption.length} venue`
      : checkOption[0]?.name;

  const handleCheckboxChange = (option) => {
    setCategory(option.time);
    // console.log(option.time, "<< time anable");

    if (selectedOptions.length > 0) {
      let temp = {};
      // console.log(
      //     selectedOptions,
      //     "masuk kondisi jika selectedOptions memiliki value sebelumnya"
      // );
      for (let j = 0; j < selectedOptions.length; j++) {
        // untuk mengecek apakan option telah ada sebelumnya
        const opt = selectedOptions[j];
        if (option.id === opt.id) {
          // console.log("masuk kondisi jika sebelumnya ada");

          temp = option; // jika ada yang sama dimasukkan ke temp untuk di dihilangkan dari selectedOptions
        }
      }

      if (temp.id) {
        // jika ada hilangkan dari selectedOptions
        // console.log(temp, "<< masuk kondisi jika ada yang sama");

        let result = [];
        for (let i = 0; i < selectedOptions.length; i++) {
          const el = selectedOptions[i];
          if (el.id !== temp.id) {
            result.push(el);
          }
        }
        // console.log(result, "<< setelah dipilih yang tidak sama");
        !result.length && setCategory(null);
        setOptCheck(result.map((el) => el.name));
        setSelectedOptions(result);
      } else {
        // jika tidak ada selectedOption yang sama dengan option makan langsung masukkan option ke selectedOption
        // console.log(temp, "<< kondisi jika tidak ada option yang sama");
        setOptCheck([...optCheck, option.name]);
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      // console.log(option, "masuk kondisi jika sebelumny selected kosong");
      setOptCheck([...optCheck, option.name]);
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative inline-block text-left bg-[#121818]">
      <h1
        className="text-black font-semibold p-2 focus:outline-none w-64 rounded-full focus:ring-2 focus:ring-[#D2AD83] bg-white select select-bordered select-sm py-2 px-3 cursor-pointer items-center"
        id="options-menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions ? listSelected(selectedOptions) : "Select Options"}
      </h1>

      {isOpen && (
        <div
          className="absolute right-0 w-full shadow-lg bg-white z-50 h-48 overflow-y-scroll"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1">
            {optionsSubVenue.map((option) => (
              <div key={option.id} className="flex items-center px-4 py-2">
                {category === 1 || category === 0 ? (
                  <>
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      checked={optCheck.includes(option.name)}
                      disabled={option.time !== category}
                      onChange={() => handleCheckboxChange(option)}
                    />
                    {/* {console.log(
                                            option,
                                            "=",
                                            optCheck,
                                            "=>",
                                            optCheck.includes(option.name)
                                        )} */}

                    {/* {console.log(
                                            option.id,
                                            ". ",
                                            option.time,
                                            "=",
                                            category,
                                            "=>",
                                            option.time === category,
                                            "<<< status disable"
                                        )} */}
                    {option.time !== category ? (
                      <label
                        htmlFor={`checkbox-${option}`}
                        className="ml-2 block text-sm text-gray-400"
                      >
                        {option.name}
                      </label>
                    ) : (
                      <label
                        htmlFor={`checkbox-${option}`}
                        className="ml-2 block text-sm text-gray-700"
                      >
                        {option.name}
                      </label>
                    )}
                  </>
                ) : (
                  <>
                    <input
                      id={`checkbox-${option}`}
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      onChange={() => handleCheckboxChange(option)}
                    />
                    <label
                      htmlFor={`checkbox-${option}`}
                      className="ml-2 block text-sm text-gray-700"
                    >
                      {option.name}
                    </label>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
