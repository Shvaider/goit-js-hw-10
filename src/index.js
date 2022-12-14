import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { generateContentList } from './js/markupList';

import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { createCardRef } from './js/markupCard';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');
const listRef = document.querySelector('.country-list');
const cardRef = document.querySelector('.country-info');

inputRef.addEventListener(
  'input',
  debounce(handleSearchCountries, DEBOUNCE_DELAY)
);

function handleSearchCountries(e) {
  const value = e.target.value.trim();
  if (!value) {
    return;
  }
  fetchCountries(value)
  .then(data => {
      if (data.length > 10) {
        Notify.info(
          `Too many matches found. Please enter a more specific name.`
        );
      }
      if (data.length <= 10) {
        listRef.innerHTML = generateContentList(data);
      }
      if (data.length === 1) {
        listRef.innerHTML = '';
        cardRef.innerHTML = createCardRef(data[0]);
      }
    })
    .catch(error => Notify.failure(`Oops, there is no country with that name`));
}

// const onInputChange = (e) => {
//     e.preventDefault()

//     countryList.innerHTML = ''

//     const inputValue = e.target.value;

//     if(inputValue){
//         fetchCountries(inputValue.trim())
//         .then(data => updateMarkup(data))
//         .catch(error => console.log('error'))
//     }
// }
// searchBox.addEventListener('input', debounce(onInputChange, 500))

// function updateMarkup (data) {
// const markup = templates(data)

// if(!data.length) {
//     error({
//         text: `Please enter a more specific query!`,
//         styling:'brighttheme',
//         delay: 500,
//     })
//     return
// }
// if(data && data.length >= 5) {
//     error ({
//         title: `Too many matches found.`,
//         text: `We found ${data.length} countries. Please enter a more specific query!`,
//         styling:'brighttheme',
//         delay: 500,
//     })
//     return data.forEach(country => countryList.innerHTML += `<li>${country.name}</li>`);
//     };
//     if(data.length === 1 ) {
//         countryList.insertAjacentHTML('afterbegin', markup)
//     }
// }
