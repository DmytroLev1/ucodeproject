
showWeather = () => fetch('https://api.openweathermap.org/data/2.5/onecall?lat=50.45466&lon=30.5238&exclude=current,minutely,hourly,alerts&cnt=4&units=metric&appid=fe4debb44e1dd94794909b4c70ba93e5')
    .then(resp => resp.json())
    .then((date) => {
        console.log(date)
        let city = document.querySelector('.cityName');
            city.textContent = date.timezone;

        let tempr = document.querySelectorAll('.tempr');
            for (let i = 0; i < date.daily.length - 2; i++) {
            tempr[i].innerHTML = Math.round(date.daily[i].temp.day) + '&deg';

            let img = document.querySelectorAll('.img');
            img[i].innerHTML = `<img src="https://openweathermap.org/img/wn/${date.daily[i].weather[0].icon}@2x.png">`
        
        let dates = document.querySelectorAll('.dates');
            let data = new Date(date.daily[i].dt * 1000);
            dates[i].innerHTML = (data.getMonth() + 1).toString().padStart(2, "0") + "." + (data.getDate().toString().padStart(2, "0"));

        };
    })
showWeather()




// showWeather = () => fetch('https://api.openweathermap.org/data/2.5/onecall?lat=50.45466&lon=30.5238&exclude=current,minutely,hourly,alerts&cnt=4&units=metric&appid=fe4debb44e1dd94794909b4c70ba93e5')
//     .then(resp => resp.json())
//     .then((date) => {
//         console.log(date)
//         let city = document.querySelector('.cityName');
//             city.textContent = date.timezone;

//         let tempr = document.querySelectorAll('.tempr');
//             for (let i = 0; i < date.daily.length - 2; i++) {
//             tempr[i].innerHTML = Math.round(date.daily[i].temp.day) + '&deg';
//         };

//         let img = document.querySelectorAll('.img');
//             for (let i = 0; i < date.daily.length - 2; i++) {
//             img[i].innerHTML = `<img src="https://openweathermap.org/img/wn/${date.daily[i].weather[0].icon}@2x.png">`
//         };

//         let dates = document.querySelectorAll('.dates');
//             for (let i = 0; i < date.daily.length - 2; i++) {
//             let data = new Date(date.daily[i].dt * 1000);
//             dates[i].innerHTML = (data.getMonth() + 1).toString().padStart(2, "0") + "." + (data.getDate().toString().padStart(2, "0"));
//         };
//     })
// showWeather()