import './card.scss';
import Button from '../Button/Button';
const Card = ({ city, refresh }) => {
    return (
        <article className="city-card">
            <header>
                {city.name}
            </header>
            <div>
                <p>Temperature: {city.main.temp}&#176;C</p>
                <p>Humidity: {city.main.humidity}% </p>
                <p>Pressure: {city.main.pressure}</p>
                <p>Wind strength and direction: {city.wind.speed} </p>
                <p>Last refresh: {refresh}</p>
                <div className="city-card__button-area">
                    <Button text="Delete" />
                    <Button text="Refresh" />
                </div>
            </div>
        </article>
    )
};

export default Card