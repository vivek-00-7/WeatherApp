const degree = document.querySelector(".weather1 #deg");
const loca = document.querySelector(".weather1 #loca");
const ico = document.querySelector(".weather1 #icon");
const cond = document.querySelector(".weather2 #cond");
const pre_date = document.querySelector(".weather2 #present");
const pre_time = document.querySelector(".weather2 #Time");
const form = document.querySelector("form");
const searchField = document.querySelector(".search");

let target = "london";

const fetchdata= async ()=>{
  const url = `https://api.weatherapi.com/v1/current.json?key=8a8b608d3dbc4a8f8eb63230230105&q=${target}`;
  const response = await fetch(url);
  const data =await response.json();
  console.log(data);
  updateWeather(data.current.temp_c,data.location.name,data.current.condition.icon,data.current.condition.text,data.current.last_updated);
};
function updateWeather(temp,location,icon,condition,predate){
      degree.innerText = temp;
      loca.innerText = location;
      ico.src = icon;
      cond.innerText = condition;
      const exactdate = predate.split(" ")[0];
      const exactime = predate.split(" ")[1];
      console.log(exactdate);
      pre_date.innerText = exactdate;
      pre_time.innerText = exactime;
}
fetchdata();
const getvalue=(e)=>{
    e.preventDefault();
    target = searchField.value;
    fetchdata();
    searchField.value="";
}
form.addEventListener("submit",getvalue);