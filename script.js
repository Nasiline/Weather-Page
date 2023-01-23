function apply() {
    let city = prompt("What city do you live in?");
    let temperature = prompt("What temperature is it?");

    if (temperature >= 0) {
      let heading = document.querySelector("h1");
      heading.innerHTML =
        "😊 <br />" + "Currently " + temperature + "°C in " + city;
    } else {
      let heading = document.querySelector("h1");
      heading.innerHTML =
        "😔 <br />" + "Currently " + temperature + "°C in " + city;
    }
  }
  let applyButton = document.querySelector("button");
  applyButton.addEventListener("click", apply);