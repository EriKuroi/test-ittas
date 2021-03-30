import './card.scss';
import { ReactComponent as Arrow } from '../../assets/arrow-up-solid.svg';
import Button from '../Button/Button';
const Card = ({ city, refresh }) => {
    const handleDeleteButton = () => {
    };
    const handleRefreshButton = () => {
    };
    return (
        <aside className="city-card">
            <header>
                {city.name}
            </header>
            <article>
                <p>Температура: {city.main.temp}&#176;C <img alt={city.weather[0].main} src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`}></img></p>
                <p>Влажность: {city.main.humidity}% </p>
                <p>Давление: {city.main.pressure}</p>
                <p>Сила и направление ветра: {city.wind.speed}м\с <Arrow className="city-card__arrow" style={{ 'transform': `rotate(${city.wind.deg}deg)` }} /></p>
                <p>Последнее обновление: {refresh}</p>
                <div className="city-card__button-area">
                    <Button text="Удалить" onClick={handleDeleteButton} />
                    <Button text="Обновить" onClick={handleRefreshButton} />
                </div>
            </article>
        </aside>
    )
};

export default Card