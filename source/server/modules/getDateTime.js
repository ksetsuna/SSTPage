// Code From: https://stackoverflow.com/questions/7357734/how-do-i-get-the-time-of-day-in-javascript-node-js
// With modification.

function getDateTime() {
    let date, hour, min, sec, year, month, day;

    date = new Date();

    hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    year = date.getFullYear();

    month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return `${year}-${month}-${day} ${hour}:${min}:${sec}`
}

export default getDateTime;