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
console.log(satu("dijalankan setelah function"));

// let data = [["a", "b"], ["d", "e"], ["f"]];
// data[0].push("c");
// console.log(data);
