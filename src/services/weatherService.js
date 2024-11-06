const API_KEY = 'd52d502d38284300a5f90256240611';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
    try {
        const queryString = `&q=${city}`;
        const res = await fetch(BASE_URL + queryString);
        const data = await res.json();                //The .json() method converts the JSON formatted string from the response into a JavaScript object.
        console.log('Data: ', data)
        return data;
    } catch (err) {
        console.log(err)
    }
}

show('New York');
export { show }
