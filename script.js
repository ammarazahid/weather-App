function search(){
const cityName = document.querySelector('input').value;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f186038f39419a4591ca8a1f0c8c0424`)
    .then(function (response) {
    document.querySelector('p').innerHTML = response.data.weather[0].main;    
    })
    .catch(function (error) {
      alert("Not Found!");
    })
    .finally(function () {
      
    });
}









