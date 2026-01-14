const today = new Date();
const year = today.getFullYear();
// getMonth() (0 for January, 11 for December)
const month = String(today.getMonth() + 1).padStart(2, '0'); // pad 0 for single number
const day = String(today.getDate()).padStart(2, '0'); // pad 0 for single number

const customFormattedDate = `${year}-${month}-${day}`;

document.getElementById("current-date").textContent = customFormattedDate;
