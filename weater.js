const apiKey ="1c3b7137f3bae5a23ec1bf638c111083";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weaterIcon = document.querySelector(".weatericon");

async function checkWeater(city) {
  const response = await fetch(apiUrl + city  + `&appid=${apiKey}`)
  var  data = await response.json();


document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp )  + "°C";
document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
document.querySelector(".wind-a").innerHTML=Math.round(data.wind.speed)   +"km/h";

if(data.weather[0].main == "cloud")  
{ weaterIcon.src = "images/icons8-cloud-96.png";} 

 else if(data.weather[0].main == "Clear"){ weaterIcon.src = "images/icons8-sun-96.png";
}
 else if(data.weather[0].main == "Rain"){ weaterIcon.src = "images/icons8-rain-cloud-96.png";
} 
else if(data.weather[0].main == "Drizzle"){ weaterIcon.src = "images/icons8-drizzle-96.png";
}
 else if(data.weather[0].main == "snow"){ weaterIcon.src = "images/icons8-snow-96.png";
}

document.querySelector(".weater").style.display="block";
}

searchBtn.addEventListener("click", ()=>{
checkWeater(searchBox.value);
})

