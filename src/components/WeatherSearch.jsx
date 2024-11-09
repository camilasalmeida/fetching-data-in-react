// src/components/WeatherSearch.jsx
import { useState } from "react";

const WeatherSearch = (props) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`The 'Search the Weather' button has been clicked, prompting the execution of the handleSubmit function.`)
    console.log(e);
    props.fetchData(city);            //don't forget to pass city state!
    console.log('6. Passing the fetchData function down to the child component and calling it back passing the city as an argument.')
    setCity('');                      //clear the input
  };


  //------------------------------------------------\\
  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter a city to fetch the data from:</label>
        <input
          id="city"
          type="text"
          value={city}                                                   
          onChange={(e) => setCity(e.target.value)}                      // This is an event handler that updates the state when the user types into the input field. This event fires whenever the value of the input field changes.
        />
        <button type="submit">Search the weather</button>                            
      </form>
    </section>
  );
};

export default WeatherSearch;
