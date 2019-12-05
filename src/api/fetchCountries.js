const fetchCountries = url =>
  fetch(url)
    .then(data => data.json())
    .catch(err => console.log(err));

export {fetchCountries};
