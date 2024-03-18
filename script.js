const key = "f3dadf64ae05e9525c4d047e9a936d59";
var body = document.querySelector('body');
var inp = document.querySelector('input');
var main1 = document.querySelector(".main1");

function handleclk() {
    if (inp.value == "") {
        alert("Fill the input");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=${key}&units=metric`)
    .then(res => res.json())
    .then(data => myfun(data))
    function myfun(e) {
        if (e.cod != "200") {
            alert("City not found. Please enter a valid city name.");
            inp.value = "";
            main1.innerHTML = ""
            return;
        }

        var condition = e.weather[0].main;
        console.log(e, "test e here");
        main1.innerHTML = `<div class="text-2xl text-center p-16 space-y-3 italic font-bold tracking-widest rounded-xl bg-blue-200 bg-opacity-40">
            <h2>City name : ${e.name}</h2>
            <h2>Temp : ${e.main.temp}</h2>
            <h2>Wind : ${e.wind.deg} °C</h2>
            <h2>Humidity : ${e.main.humidity} %</h2>
            <h2>Weather : ${e.weather[0].main}</h2>
        </div>`;
        inp.value = "";
        console.log(condition, "test");

        switch (condition) {
            case "Mist":
                body.style.backgroundImage = "url(./img/mist.jpg)";
                break;
            case "Clouds":
                body.style.backgroundImage = "url(./img/cloud.webp)";
                body.style.backgroundSize = "cover";
                break;
            case "Smoke":
                body.style.backgroundImage = "url(./img/smoke.jpg)";
                body.style.backgroundSize = "cover";
                break;
            case "Haze":
                body.style.backgroundImage = "url(./img/haze.jpeg)";
                body.style.backgroundSize = "cover";
                break;
            case "Fog":
                body.style.backgroundImage = "url(./img/fog.jpg)";
                break;
            case "Rain":
                body.style.backgroundImage = "url(./img/rain2.webp)";
                body.style.backgroundSize = "cover";
                break;
            case "Clear":
                body.style.backgroundImage = "url(./img/clear.webp)";
                body.style.backgroundSize = "cover";
                break;
        }
    }
}












