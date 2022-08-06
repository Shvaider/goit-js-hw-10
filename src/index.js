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

    refs.countryList.innerHTML = ''

    const inputValue = e.target.value;

    if(inputValue){
        fetchCountries(search-box.trim()).then(data => updateMarkup(data)).catch(error => console.log('error'))
    }
}

function updateMarkup (data) {
const markup = templates(data)

if(!data.length) {
    error({ })
}
}