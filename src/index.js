import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import { debounce } from 'lodash';

import './css/styles.css';
import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const onInputChange = (e) => {
    e.preventDefault()

    countryList.innerHTML = ''

    const inputValue = e.target.value;

    if(inputValue){
        fetchCountries(inputValue.trim())
        .then(data => updateMarkup(data))
        .catch(error => console.log('error'))
    }
}
searchBox.addEventListener('input', debounce(onInputChange, 500))

function updateMarkup (data) {
const markup = templates(data)

if(!data.length) {
    error({ 
        text: `Please enter a more specific query!`,
        styling:'brighttheme',
        delay: 500,
    })
    return
}
if(data && data.length >= 5) {
    error ({
        title: `Too many matches found.`,
        text: `We found ${data.length} countries. Please enter a more specific query!`,
        styling:'brighttheme',
        delay: 500,
    })
    return data.forEach(country => countryList.innerHTML += `<li>${country.name}</li>`);  
    };
    if(data.length === 1 ) {
        countryList.insertAjacentHTML('afterbegin', markup)
    }
}
