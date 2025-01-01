// Date :
// Data object contain a Number that represent millisecond since 1 january 1970 UTC  // (coordinated universal time )

// Date() constructor create a Date object when called a function it return a string representation of the current time;

//? 9 way to create a new Date object :

// new Date()
// new Date(date_string)
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes, second )
// new Date(year,month,day,hours,minutes, second , millisecond,)
// new Date(Milliseconds)

//? 1. how to create data object  
//* - Date objects are created with the new Date() constructor
let currentDate = new Date();
console.log("currentDate",currentDate);// 2024-09-21T02:39:03.238Z  indicates that the time is in UTC (coordinated universal time )
//  This format is in the ISO 8601 standard return a string representation of the current data and time with separator by latter T and z
// - it suggests that your environment (like some browsers' developer tools or Node.js) is automatically calling toISOString() or a similar method for the output. This format is in ISO 8601 and represents the date and time in UTC.
//
//? 2  new Date(date_string) create date based on the provided string 
//* created date object with specified data and time:
const data = '2024-09-21T02:39:03.238Z'
let curTime1 = new Date(data) 
console.log(curTime1)

//? ex 
 const onlyDate = '2024-12-11'; // Date only
const dateObj2 = new Date(onlyDate);
console.log(dateObj2); // Time is set to 00:00:00 in your local timezone

// ex
const specificDateTime = '2024/12/11 15:45:30'; // Another valid format
const dateObj3 = new Date(specificDateTime);
console.log(dateObj3); // Outputs the specific date and time

// Unix Timestamp (Milliseconds)
const unixTimestamp = 1700000000000; // Unix timestamp in milliseconds
const dateObj5 = new Date(unixTimestamp);
console.log(dateObj5); // Converts the timestamp to a Date object


//? 3  new Date(year,month) : create date object with specified year and month
let newDate = new Date(2020,2)
console.log('newDate', newDate)


//? 4  new Date(year,day) : create date object with specified year, month, and day
let newDate1 = new Date(2020,1,19)
console.log('newDate.....', newDate1)


//? 5  new Date(year,month,day, hours) : create date object with specified year, month, and day,hours
let newDate2 = new Date(2020,2,1,10)
console.log('newDate.....', newDate2)

//? 6  new Date(year,month,day, hours, min) : create date object with specified year, month, and day,hours,minutes
let newDate3 = new Date(2020,2,1,10,44)
console.log('newDate.....', newDate3)


//? 7  new Date(year,month,day, hours, min, sec) : create date object with specified year, month, and day,hours,minutes,sec
let newDate4 = new Date(2020,2,1,10,44,5)
console.log('newDate.....', newDate4)

//? 8  new Date(year,month,day, hours, min, sec, ms) : create date object with specified year, month, and day,hours,minutes,sec and milliseconds
let newDate5 = new Date(2020,2,1,10,44,5)
console.log('newDate.....', newDate5)

//? 9  new Date(milliseconds) create Date object representing the number of millisecond since the unix epoch (january 1 ,1970)
const ms = new Date();  // return data into the milliseconds up for 01 jan 1970
console.log(ms); // return data into the milliseconds up for 01 jan 1970
const ms1 = new Date().getTime();  // return data into the milliseconds up for 01 jan 1970v
console.log("ms1",ms1)

// 2. New Date().toLocaleString()
// -  toLocalString converts date and time into a string by using the current local or specified local
let date = new Date().toLocaleString();
console.log(date); // 21/9/2024, 8:13:01 am

// * customizable 
let date2 = new Date().toLocaleString('de-DE');
console.log(date2) // 21.9.2024, 08:23:45


// 3. New.Date().toString()  
// - Return a string representation of Date the format of the string depends on the local
let curData = new Date().toString()
console.log("curData",curData);

// ---------------------------------------------------
// 
// *  what is differences between Date().toLocalString() and Date().toString()
// - The Date().toLocaleString() and Date().toString() methods both return a string representation of a date object in JavaScrip
// - they differ in terms of formatting, localization, and how the date and time are represented.

// 1. Date().toLocaleString():
//- This method formats the date and time according to the conventions of a specific locale or language.
// -By default, it uses the system's locale settings, but you can specify different locales and options. (You can provide options to format the output (e.g., adjusting the format of date, time, and time zones).)
// 2024-09-21T02:44:57.320Z
// - You can control the format using an options object.
// const date3 = new Date();
// console.log(date3.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));



// 2 .Date().toString():
// - This method returns a standard format for the date and time that is not affected by locale settings.
// The format typically includes the day of the week, month, day, year, time, time zone, and  in a fixed format.
// Sat Sep 21 2024 08:14:57 GMT+0530 (India Standard Time)
// Always returns a full, fixed-length string (he output is fixed and cannot be altered. You will always get the same detailed format.)

// ---------------------------------------------

//  Date.now() :
//- Return the number of milliseconds elapsed since midnight january 1 1970 (utc universal co-ordinate time)
let sec = Date.now()
console.log(sec); //1726887911775



// *  New Date(year, month, day, hours, mints, second, millisecond):
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


var s = new Date();
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
// getTime() -> return the data in millisecond

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
console.log(  'time',curTime.getTime());

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
const curTime12 = new Date();
console.log("return time in millisecond" ,curTime12.setTime(10));


// external meths :

// it return only current data
console.log(new Date().toLocaleDateString());
// it return only current time
console.log(new Date().toLocaleTimeString());
// it return date and Time 
console.log(new Date().toLocaleString());



//parse() :
// parse string representation of a date and return the number of millisecond since january 1 1970
const time = new Date();
console.log("time",time);
const numTime = Date.parse(time);
console.log(numTime) // return output in millisecond


//! Date.now() : static method of the date object
//! Date.now : method to get timestamp right this second
//! new Date().getTime() : if you have and existing Date object from else where and want its timestamp the used.

//? write a function to add a specified number of day to a given date ?
const addToDate = (date1,extraDay) =>{
    console.log("date1",date1);
    console.log(extraDay)
    const extraDayDate = date1.setDate(date1.getDate() + extraDay)
    console.log(extraDayDate);
   return new Date(extraDayDate)

}
const date1 = new Date('2024-02-29'); // return date in indian standard format
console.log(date1);
const new_date = addToDate(date1, 7);
console.log(new_date)

// ? write a function to calculate the differences between tow given days ?
const differencesOfDate = (day1, day2) =>{
    let diff = day2-day1 // return differences in millisecond
    // calculate the day by dividing to the return result / per day millisecond
    const perDay = 24*60*60*1000
// 24 hours in a day.
// 60 minutes in an hour.
// 60 seconds in a minute.
// 1000 milliseconds in a second.
    return Math.round(diff/perDay)
}

const day1 = new Date("2024-02-19");
const day2 = new Date("2024-03-01");
console.log(differencesOfDate(day1, day2))



// ? show the live current time :c
const liveWatch = () =>{
    return  new Date().toLocaleTimeString();
}
const stop = setInterval(()=>{
console.log(liveWatch());
},1000)

setTimeout(()=>{
    console.log('execution stop')
clearInterval(stop)
},3000)



