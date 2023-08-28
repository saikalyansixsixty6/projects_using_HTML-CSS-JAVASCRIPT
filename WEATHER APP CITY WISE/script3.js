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
        
        imgele.src = "https://github.com/saikalyansixsixty6/projects_using_HTML-CSS-JAVASCRIPT/assets/91243096/fbb90d83-e17e-4941-8651-ca30a274257f";
    }else if(data.weather[0].main == "Clear"){
       imgele.src = "https://github.com/saikalyansixsixty6/projects_using_HTML-CSS-JAVASCRIPT/assets/91243096/9f9c8c8e-a885-4070-b9fb-704a3691c83a"
    }else if(data.weather[0].main == "Mist"){
        imgele.src = "https://github.com/saikalyansixsixty6/projects_using_HTML-CSS-JAVASCRIPT/assets/91243096/243a5011-95f0-4147-9ea6-ea993a30f972"
    }else if(data.weather[0].main == "Snow"){
        imgele.src = "https://github.com/saikalyansixsixty6/projects_using_HTML-CSS-JAVASCRIPT/assets/91243096/05497137-888c-43cb-a70b-a180b3350f49"
    }else if(data.weather[0].main == "Rain"){
        imgele.src = "https://github.com/saikalyansixsixty6/projects_using_HTML-CSS-JAVASCRIPT/assets/91243096/8efb5d21-6880-43bd-a23a-99d26b9ff25c"
    }else if(data.weather[0].main == "Drizzle"){
        imgele.src = "https://github.com/saikalyansixsixty6/projects_using_HTML-CSS-JAVASCRIPT/assets/91243096/30e05499-b086-4ca5-8bd4-42d4a6f64d6b"
    }


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";
});

