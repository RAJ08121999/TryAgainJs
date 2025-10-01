const button = document.getElementById("searchButton");

const input = document.getElementById("cityInput");

const cityName = document.getElementById("cityname");
const cityTime = document.getElementById("citytime");
const cityTemp = document.getElementById("citytemp");

async function getData(cityName){
    const promise = await fetch(`apiurl${cityName}`);
    return await promise.json();
}

button.addEventListener("click",async ()=>{
    const value = input.value;
    const res = await getData(value);
    console.log(res);
    cityName.innerText = `${result.location.name},${res.location.region} -- ${res.location.country}`
    cityTime.innerText = res.location.localtime;
    cityTemp.innerText = res.current.temp_c;

});