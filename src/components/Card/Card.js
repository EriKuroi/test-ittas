import './card.scss';
import Button from '../Button/Button';
const Card = ({ city }) => {
    return (
        <article className="city-card">
            <header>
                {city.name}
            </header>
            <div>
                <p>Temperature: {city.temp}&#176;C</p>
                <p>Humidity: {city.humid}% </p>
                <p>Pressure: 1015</p>
                <p>Wind strength and direction: {city.windStr} </p>
                <p>Last refresh: {city.refresh}</p>
                <div className="city-card__button-area">
                    <Button text="Delete" />
                    <Button text="Refresh" />
                </div>
            </div>
        </article>
    )
};

export default Card