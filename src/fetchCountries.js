export const fetchCountries = (searchQuery) => {
    let nameContry = searchQuery;
    return fetch(`https://restcountries.eu/rest/v2/name/${nameContry}`)
        .then((response) => response.json());
                
            
};
