"use script"

var dateFns = require("date-fns");
var x = new Date();
var y = new Date(2022, 2, 6, 0, 0, 15);
var temp;
temp = dateFns.differenceInYears(y, x);
var result = temp + " years ";
x = dateFns.addYears(x, temp);
temp = dateFns.differenceInMonths(y, x);
result = result + temp + " months ";
x = dateFns.addMonths(x, temp);
temp = dateFns.differenceInDays(y, x);
result = result + temp + " days ";
x = dateFns.addDays(x, temp);
temp = dateFns.differenceInHours(y, x);
result = result + temp + " hours ";
x = dateFns.addHours(x, temp);
temp = dateFns.differenceInMinutes(y, x);
result = result + temp + " minutes ";
x = dateFns.addMinutes(x, temp);
temp = dateFns.differenceInSeconds(y, x);
result = result + temp + " seconds";
console.log(result);