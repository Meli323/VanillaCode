       let now = new Date();
console.log(now);
console.log(now.getMilliseconds());
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
console.log(day);
console.log(now.getFullYear());
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
console.log(month);
let year = now.getFullYear();
let date = now.getDate();
console.log(date);
alert(`Today is ${day}, ${month} ${date}, ${year}`);
function formatDate(day, month, date, year) {
  let newDate = day + ", " + month + " " + date + ", " + year;
  return newDate;
}
formatDate("Sunday", "Sep", 19, 2021);
console.log(formatDate(new Date()));