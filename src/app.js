import { warning } from './utils/pnotify';

import { fetchCountries, baseUrl, options } from './api/fetchCountries';
import { refs } from './utils/refs';
import debounce from 'lodash.debounce';
import template from './templates/country-items.hbs';

function findUniqueCountry(data) {
  if (data.length > 10) {
    warning();
  } else if (data.length >= 2 && data.length <= 10) {
    const htmlMarkup = data
      .map(e => `<li class="country-item country-list">${e.name}</li>`)
      .join('\n');
    refs.countryList.insertAdjacentHTML('afterbegin', htmlMarkup);
  } else if ((data.length = 1)) {
    const [country] = data;
    refs.searchInput.insertAdjacentHTML('afterend', template(country));
    refs.countryList.innerHTML = '';
  }
  return data;
}

function resultSearchCountry(event) {
  event.preventDefault();

  const inputValue = event.target.value;

  if (inputValue === '') {
    refs.deleteCountry.innerHTML = '';
    return inputValue;
  }
  

  fetchCountries(baseUrl + inputValue, options).then(findUniqueCountry);
}

refs.searchInput.addEventListener('input', debounce(resultSearchCountry, 500));
