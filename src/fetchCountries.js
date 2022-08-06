const fetchCountries = name => {
  const DATA_URL = 'https://restcountries.com/v2/name/';
  let url = `${DATA_URL}${name}`;
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log('error'));
};
export default fetchCountries;
