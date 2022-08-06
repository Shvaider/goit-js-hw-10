export function createCardRef(event) {
    const lang = event.languages.map(language => {
        return language.name;
    }).join(', ');
    return`
        <h2>${event.name}</h2>
        <img src="${event.flags.svg}" alt="${event.name}" width="100"/>
          <p><b>Capital</b>: ${event.capital}</p>
          <p><b>Population</b>: ${event.population}</p>
          <p><b>Languages</b>: ${lang}</p>`;
    
}