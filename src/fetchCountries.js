// const fetchCountries = name => {
//   const DATA_URL = 'https://restcountries.com/v2';
//   let url = `${DATA_URL}/name/${name}`;
//   return fetch(url)
//     .then(response => response.json())
//     .catch(error => console.log('error'));
// };
// export default fetchCountries;

const DATA_URL = 'https://restcountries.com/v2';
const FILTER_RESPONSE = `name,capital,flags,languages,population`;

export function fetchCountries(name) {
  return fetch(`${DATA_URL}/name/${name}?field=${FILTER_RESPONSE}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
