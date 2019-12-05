import { fetchCountries } from './api/fetchCountries';
import { refs } from './utils/refs';
import template from './templates/country-items.hbs';
import PNotify from '../node_modules/pnotify/dist/es/PNotify';

const baseUrl = 'https://restcountries.eu/rest/v2/name/';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

function findUniqueCountry(data) {
  if (data.length > 10) {
    PNotify.alert(
      'Too many matches found. Please enter a more specific query!',
    );
  } else if (data.length >= 2 && data.length <= 10) {
    const htmlMarkup = data.map(e => template(e.name)).join('\n');
    refs.countryList.insertAdjacentHTML('afterbegin', htmlMarkup);
  };
  // else if (data.lenght = 1) {

  // }
} 

function resultSearchCountry({ target }) {
  event.preventDefault();

  const inputValue = target.value;

  fetchCountries(baseUrl + inputValue, options).then(findUniqueCountry);
}

refs.getCountry.addEventListener('input', _.debounce(resultSearchCountry, 500));
