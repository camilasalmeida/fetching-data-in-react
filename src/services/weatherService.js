// src/services/weatherServices.js

const API_KEY = 'd52d502d38284300a5f90256240611';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
    try {
        console.log('2. The city has been passed to the show function, city:', city);
        const queryString = `&q=${city}`;
        console.log('3. The queryString function: ', queryString)
        const res = await fetch(BASE_URL + queryString)
        const data = await res.json()
        console.log('4. Data has been successfully fetched, or No data returned or an error occurred: ', data)
        return data;

    } catch (err) {
        console.log('Error: ',err);
    }
}

export { show };