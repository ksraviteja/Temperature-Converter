function currentTime() {
    let p1 = document.getElementById("p1")
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let ss = date.getSeconds();
    let current_time = hr + ":" + mn + ":" + ss;
    p1.innerHTML = current_time;
    let t = setTimeout(function () { currentTime() }, 1000);
}
currentTime();
function temperature() {
    let inputValue = document.querySelector("#inputValue").value;
    let type1 = document.querySelector("#type1");
    let type2 = document.querySelector("#type2");
    let result = document.querySelector("#result");
    const myVisibleBlock = document.getElementById('MyVisibleBlock');
    if (inputValue === "") {
        myVisibleBlock.style.display = 'block';
    }
    
    else if (type1.value == "celcius" && type2.value == "celcius") {
        let Celcius = Number.parseInt(inputValue) * 1
        result.innerHTML = Celcius.toFixed(4) + ` &deg;C`
        myVisibleBlock.style.display = 'none';
    }
    else if (type1.value == "celcius" && type2.value == "fahrenheit") {
        let Fahrenheit = Number.parseFloat(inputValue *9)/5+32
        result.innerHTML = Fahrenheit.toFixed(4) + " F"
        myVisibleBlock.style.display = 'none';
    }
    else if (type1.value == "fahrenheit" && type2.value == "celcius") {
        let Celcius = Number.parseFloat((inputValue - 32) * 5) / 9
        result.innerHTML = Celcius.toFixed(4) + ` &deg;C`
        myVisibleBlock.style.display = 'none';
    }
    else if (type1.value == "fahrenheit" && type2.value == "fahrenheit") {
        let Fahrenheit = Number.parseInt(inputValue) * 1
        result.innerHTML = Fahrenheit.toFixed(4) + " F"
        myVisibleBlock.style.display = 'none';
    }
    else
    { 
        myVisibleBlock.style.display = 'none';
    }
}