const apiKey = '716cc3e4f522557fd4f580121dd2a777';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const imgele = document.getElementById("main-icon");


var button = document.getElementById("searchButton");


button.addEventListener("click",async function (){



    var city = document.getElementById("input");
    var cityName = city.value.toLowerCase();
    const response = await fetch(apiUrl+`&appid=${apiKey}`+`&q=${cityName}`);
    let data = await response.json()
    
    console.log(data)
    console.log(data.weather[0].main)
    
    if (data.weather[0].main == "Clouds"){
        console.log("clouds");
        
        imgele.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
       imgele.src = "images/clear.png"
    }else if(data.weather[0].main == "Mist"){
        imgele.src = "images/mist.png"
    }else if(data.weather[0].main == "Snow"){
        imgele.src = "images/snow.png"
    }else if(data.weather[0].main == "Rain"){
        imgele.src = "images/rain.png"
    }else if(data.weather[0].main == "Drizzle"){
        imgele.src = "images/drizzle.png"
    }


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";
});

