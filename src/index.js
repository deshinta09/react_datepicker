let have_facility = [
  {
    m_facility_categories_id: 1,
  },
  {
    m_facility_categories_id: 1,
  },
  {
    m_facility_categories_id: 2,
  },
  {
    m_facility_categories_id: 3,
  },
  {
    m_facility_categories_id: 3,
  },
  {
    m_facility_categories_id: 4,
  },
];

function facilitiesByCategory(data_facilities) {
  let result = [];
  for (let i = 0; i < data_facilities.length; i++) {
    const el = data_facilities[i];

    if (result.length < 1) {
      result.push([el]);
    } else {
      for (let n = 0; n < result.length; n++) {
        // check ke data yang sudah ada
        // console.log(i, ":", n);

        const elmn = result[n][0];
        // console.log(elmn);

        if (elmn.m_facility_categories_id === el.m_facility_categories_id) {
          result[n].push(el);
        } else {
          result.push([el]);
        }
      }
    }
  }
  return result;
}

// console.log(facilitiesByCategory(have_facility));
console.log(satu("dijalankan sebelum function"));

function satu(params) {
  return "function satu", params;
}
// console.log(satu("dijalankan setelah function"));

// let data = [["a", "b"], ["d", "e"], ["f"]];
// data[0].push("c");
// console.log(data);

function findMissingLetter(letter) {
  let alfabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let result = "";
  let n = 0;
  let index = alfabet.indexOf(
    letter[0] === letter[0].toUpperCase() ? letter[0].toLowerCase() : letter[0]
  );
  let last = alfabet.indexOf(
    letter[letter.length - 1] === letter[letter.length - 1].toUpperCase()
      ? letter[letter.length - 1].toLowerCase()
      : letter[letter.length - 1]
  );
  // console.log(
  //   last,
  //   "<< index last",
  //   index,
  //   "<< index",
  //   alfabet[index],
  //   "<< alfabet index",
  //   alfabet[last],
  //   "<< alfabet last"
  // );
  for (let i = index; i < last; i++) {
    // console.log(i, "<< i", letter[n], "<< letter");
    let check = letter[n] ? letter[n].toUpperCase() : "";
    if (letter[n] === check) {
      // console.log(alfabet[i].toUpperCase(), "<< alfabet uppercase");
      alfabet[i].toUpperCase() !== letter[n]
        ? (result += alfabet[i].toUpperCase())
        : "";
    } else {
      if (alfabet[i] !== letter[n]) {
        result && result.toUpperCase() === result
          ? (result += alfabet[i].toUpperCase())
          : (result += alfabet[i]);
      }
    }
    n++;
  }
  return result;
}
let arr = ["a", "b", "c", "e"];
let arrUpper = ["A", "B", "C", "D", "F"];
let miss = ["O", "S"];
console.log(findMissingLetter(arr));
console.log(findMissingLetter(arrUpper));
console.log(findMissingLetter(miss));
console.log(findMissingLetter(["a", "b", "c", "d", "f"]), "<< e");
console.log(findMissingLetter(["O", "Q", "R", "S"]), "<< P");
