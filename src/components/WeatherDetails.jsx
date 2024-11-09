// src/components/WeatherDetails.jsx


const WeatherDetails = (props) => {
    console.log('8. WeatherDetails props: ', props);
    return (
        <section>
            <h2>Weather Details</h2>
            <p>Location: {props.weather.location} </p>
            <p>Temperature: {props.weather.location} </p>
            <p>Condition: {props.weather.location} </p>
        </section>
    )
}
  
export default WeatherDetails;