let btn = document.getElementById("search-btn");

let inp = document.getElementById("search-box");

let result = document.getElementById("result");

async function getData(name) {
  let resp = await fetch(
    "https://restcountries.com/v3.1/name/" + name + "?fullText=true"
  );
  let data = await resp.json();

  console.log(data[0]);
  console.log(data[0].capital[0]);
  console.log(data[0].flags.svg);
  console.log(data[0].name.common);
  console.log(data[0].continents[0]);
  console.log(Object.keys(data[0].currencies)[0]);
  console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
  console.log(data[0].currencies[Object.keys(data[0].currencies)].symbol);
  console.log(data[0].population);
  console.log(
    Object.values(data[0].languages).toString().split(",").join(", ")
  );
  result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]} - ${
    data[0].currencies[Object.keys(data[0].currencies)].symbol
  }</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</span>
            </div>
        </div>
  `;
}

btn.addEventListener("click", () => {
  getData(inp.value)
});
