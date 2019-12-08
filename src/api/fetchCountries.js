const baseUrl = 'https://restcountries.eu/rest/v2/name/';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

const fetchCountries = url =>
  fetch(url)
    .then(data => data.json())
    .catch(err => console.log(err));
export { fetchCountries, baseUrl, options };
