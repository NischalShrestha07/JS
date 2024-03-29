// var today = new Date();
var today = new Date();
// Date() is a method which has been already predefined in the interpreter

// / Get the day of the week (0-6 in the form of indexes, where 0 is Sunday and 6 is Saturday)
var day = today.getDay();
// getDate() is a method which has been already predefined in the interpreter

var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"]


console.log("Today is:" + daylist[day] + ".");

// helps to get the current hours, minutes, second

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

//checks wheather time is in PM or AM using Ternary Operator
var check = (hour >= 12) ? "PM" : "AM";

//Helps Converting the 24hour format to 12hour using ternary operator
hour = (hour >= 12) ? hour - 12 : hour;

// checks the case when hour can be 0

if (hour === 0 && check == 'PM') {
    if (minute === 0 && second === 0) {
        hour = 12;
        check = 'Noon';
    } else {
        hour = 12;
        check = 'PM';

    }
}

//another checks the case when hour can be 0 for 'AM'
//*triple equals(===) is a strict equality comparison operator, meaning it checks both value and data type.So, it's checking if the value of hour is exactly 0.*/
if (hour === 0 && check === 'AM') {
    if (minute === 0 && second === 0) {
        hour = 12;
        check = 'AM';

    }

}
console.log("Current Time is: " + hour + check + " : " + minute + " : " + second);
