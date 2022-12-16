"use strict";

const input1 = document.getElementById("fname");
const input2 = document.getElementById("lname");
const input3 = document.getElementById("dob");
const mysubmit = document.getElementById("submit");
const input5 = document.getElementsByTagName;

input3.addEventListener("input", function () {
  const trlength = document.getElementById("data").rows.length;

  for (let i = 0; i < trlength; i++) {
    const tableRow = document.getElementById("data").rows[i];
    tableRow.classList.remove("hidden");

    if (input3.value * 1 >= tableRow.getElementsByTagName("td")[2].innerHTML * 1) {
      tableRow.classList.add("hidden");
    }

    if (input3.value * 1 < tableRow.getElementsByTagName("td")[2].innerHTML * 1) {
      tableRow.classList.remove("hidden");
    }
  }
});

mysubmit.addEventListener("click", function () {
  let input1 = document.getElementById("fname").value;
  let input2 = document.getElementById("lname").value;
  let input3 = document.getElementById("dob").value;
  const trlength = document.getElementById("data").rows.length;
  for (let i = 0; i < trlength; i++) {
    const tableRow = document.getElementById("data").rows[i];

    if (tableRow.getElementsByTagName("td")[0].innerHTML.indexOf(input1) || input3 * 1 >= tableRow.getElementsByTagName("td")[2].innerHTML * 1) {
      tableRow.classList.add("hidden");
    }
  }
});
