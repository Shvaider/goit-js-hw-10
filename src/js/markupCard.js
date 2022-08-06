export function createCardRef(country) {
  const lang = country.languages.map(language => language.name).join(', ');
  return `
  <img src="${country.flags.svg}" alt="${country.name}" width="60"/>
        <h2>${country.name}</h2>
          <p><b>Capital</b>: ${country.capital}</p>
          <p><b>Population</b>: ${country.population}</p>
          <p><b>Languages</b>: ${lang}</p>`;
}
