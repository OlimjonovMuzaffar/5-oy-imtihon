import malumot from "./request.js";
import darkMode from "./dark-mode.js";
darkMode();
const query = window.location.search;
const urlParams = new URLSearchParams(query).get("id");
const api = `https://countries-api-v7sn.onrender.com/countries/slug/${urlParams}`;

const countryInfo = document.querySelector(".country-info");

malumot(api)
  .then((data) => {
    about([data]);
  })
  .catch((error) => {
    console.log(error.message);
  });

function about(data) {
  data.forEach((item) => {
    const {
      name: { nativeName, common },
      flags: { svg },
      region,
      subregion,
      languages,
      capital,
      borders,
      currencies,
      population,
    } = item;
    const number = population.toLocaleString("EN-US");
    console.log(borders);
    countryInfo.innerHTML += `
    <img
    class="country-info__img"
    src="${svg}"
    alt="germany-flag"
    width="560"
    height="400"
  />
  <div class="country-info__content">
    <h2>${common}</h2>
    <ul class="country-info__list">
      <li class="country-info__item">
        <p class="name">
          Native Name:
          <span>${nativeName}</span>
        </p>
        <p class="population">
          Population:
          <span>${number}</span>
        </p>
        <p class="region">
          Region:
          <span>${region}</span>
        </p>
        <p class="sub-region">
          Sub Region:
          <span>${subregion ? subregion : "Subregion Mavjud Emas"}</span>
        </p>
        <p class="capital">
          Capital:
          <span>${capital[0] ? capital[0] : "Poytaxt Mavjud Emas"}</span>
        </p>
      </li>
      <li class="country-info__item">
        <p class="population">
          Currencies:
          <span>${currencies[0] ? currencies : "Currencies mavjud emas"}</span>
        </p>
        <p class="region">
          Languages:
          <span>${languages}</span>
        </p>
      </li>
    </ul>
    <div class="country-info__borders">
      <h3>Border Countries:</h3>
      ${
        borders[0]
          ? borders
              .map((item) => {
                return `
        <a href="./about.html?id=${item.slug}">${item.common}</a>
        `;
              })
              .join("")
          : "Qo'shni davlatlari mavjud emas"
      }
    </div>
  </div
    `;
  });
}
