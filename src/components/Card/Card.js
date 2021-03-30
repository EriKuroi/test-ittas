import './card.scss';
import { ReactComponent as Arrow } from '../../assets/arrow-up-solid.svg';
import Button from '../Button/Button';
const Card = ({ city }) => {
    const handleDeleteButton = () => {
    };
    const handleRefreshButton = () => {
    };
    const timeInDate = new Date(city.refreshTime);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateForHumans = timeInDate.toLocaleString('ru-BY', options).substring(0, 13);
    const timeForHumans = timeInDate.toTimeString();
    return (
        <aside className="city-card">
            <header>
                {city.name}
            </header>
            <article>
                <p>Температура: {city.main.temp}&#176;C
                    <img
                        alt={city.weather[0].main}
                        src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`}
                    ></img>
                </p>
                <p>Влажность: {city.main.humidity}% </p>
                <p>Давление: {city.main.pressure}</p>
                <p>Сила и направление ветра: {city.wind.speed}м\с
                    <Arrow
                        className="city-card__arrow"
                        style={{ 'transform': `rotate(${city.wind.deg}deg)` }}
                    />
                </p>
                <p>Последнее обновление:
                    <span>{dateForHumans}</span>
                    <span>{timeForHumans.slice(0, 17)}</span>
                </p>
                <div className="city-card__button-area">
                    <Button text="Удалить" onClick={handleDeleteButton} />
                    <Button text="Обновить" onClick={handleRefreshButton} />
                </div>
            </article>
        </aside>
    )
};

export default Card