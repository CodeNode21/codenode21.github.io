var rightNow = new Date();
var theDay = rightNow.getDay();

var now = new Date();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
console.log(nameOfToday);

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new getDate();
var theMonth = now.getMonth();
var nameOfMonth = monthNames[theMonth];
console.log(nameOfMonth);

var date = now.getDate();
console.log(date);

var year = now.getFullYear();
console.log(year);

var hour = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var milliseconds = now.getMilliseconds();

console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(milliseconds);
console.log(hour, ":", minutes, ":", seconds, ":", milliseconds);
