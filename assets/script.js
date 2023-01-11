
const apiKey = '2d7398721ae9d4f919ed8f35417d781d';
let city;

let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}";

fetch(queryURL);
