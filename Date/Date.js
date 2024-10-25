// Date :
// Data object contain a Number that represent millisecond since 1 january 1970 UTC

// 1. how to create data object 
// - Date objects are created with the new Date() constructo
let currentDate = new Date();
console.log(currentDate);// 2024-09-21T02:39:03.238Z //  This format is in the ISO 8601 standard
// - it suggests that your environment (like some browsers' developer tools or Node.js) is automatically calling toISOString() or a similar method for the output. This format is in ISO 8601 and represents the date and time in UTC.

// ------------------------------------------


// 2. New Date().toLocaleString()
// -  toLocalString converts date and time into a string by using the current local or specified local
let date = new Date().toLocaleString();
console.log(date); // 21/9/2024, 8:13:01 am

// * custamaizable 
let date2 = new Date().toLocaleString('de-DE');
console.log(date2) // 21.9.2024, 08:23:45


// 3. New.Date().toString()  
// - Return a string representation of data the format of the string depends on the local
let curData = new Date().toString()
console.log(curData);

// ---------------------------------------------------

// *  what is differences between Date().toLocalString() and Date().toString()
// - The Date().toLocaleString() and Date().toString() methods both return a string representation of a date object in JavaScrip
// - they differ in terms of formatting, localization, and how the date and time are represented.

// 1. Date().toLocaleString():
//- This method formats the date and time according to the conventions of a specific locale or language.
// -By default, it uses the system's locale settings, but you can specify different locales and options. (You can provide options to format the output (e.g., adjusting the format of date, time, and time zones).)
// 2024-09-21T02:44:57.320Z
// - You can control the format using an options object.
const date3 = new Date();
console.log(date3.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));



// 2 .Date().toString():
// - This method returns a standard format for the date and time that is not affected by locale settings.
// The format typically includes the day of the week, month, day, year, time, time zone, and  in a fixed format.
// Sat Sep 21 2024 08:14:57 GMT+0530 (India Standard Time)
// Always returns a full, fixed-length string (he output is fixed and cannot be altered. You will always get the same detailed format.)

// ---------------------------------------------

//  Date.now() :
//- Return the number of milliseconds elasped since midnight january 1 1970 (utc universal co-ordinate time)

let sec = Date.now()
console.log(sec); //1726887911775



// *  New Date(year, month, day, hours, minuts, second, millisecond):
//- in javascript month count form 0 to 11 (january is 0 and December is 11 )
var d = new Date( 2018, 11, 24, 10,33,30,0 )
console.log('d',d.toLocaleString());
console.log('d',d.toString());

// if you pass any of argument in new Date() object you need to pass month as mandatory argument if you not defined month show by default value like 1/1/1970
var a = new Date(2023,3,6)
console.log(a.toLocaleString());


// new Date(millisecond);
var v = new Date(0);
console.log(v.toLocaleString()) 
// new Date(millisecond) create new date object as zero time plus


var s = new Date("octumber 13, 2014 11:12:00");
console.log(s);
console.log(s.toString())

// ----------------------------------------------------------------

// Method of the Dates 
// Const curDate = new Date();
// toLocalString → convert date and time to local 
// getFullYear → return current Year
// getMonth → get current month
// getDate() – get the current date
// getDay() → return the current day of week

const c_date = new Date();
console.log(c_date);
console.log('covert date and time to local', c_date.toLocaleString());
console.log('getFull Year', c_date.getFullYear());
console.log('get month', c_date.getMonth());
console.log('get date', c_date.getDate());
console.log('GetDay', c_date.getDay());




// How to set individual dates..
// When you set individual date it always return the millisecond till 1 jan 1970 

const cur_Date = new Date();
console.log(cur_Date.setFullYear(2022));
console.log(cur_Date.setFullYear(2022,10,5));
console.log(cur_Date.setMonth(5));

// -------------------------------------------------------
// Time methods 
// method() 
// getTime() → return the number of millisecond since 1 jan 1970
// getHours() → return the hours of a date as a number (0-23)
// getMinutes() → return current minutes
// getSecond() → return current second
// getMillisecond() -> return current millisecond.

const curTime = new Date();
// return the number of millisecond since 1 jan 1970
console.log(curTime.getTime());

// return the hours of a date as a number (0-23)
console.log(curTime.getHours());

//  return current minutes
console.log(curTime.getMinutes());

// return current second
console.log(curTime.getSeconds());


console.log(curTime.getMilliseconds())


// --------------------------------------------

// Set individual time 
// We have to set individual time its method alway return time in milliseconds
// all method return the number of millisecond since 1 jan 1970
// setHours()→
// setMinutes()→
// setSecond() →
// setMillisecond()



// external methos :

// it return only current data
console.log(new Date().toLocaleDateString());
// it return only current time
console.log(new Date().toLocaleTimeString());
// it return date and Time 
console.log(new Date().toLocaleString());











