import './card.scss';
import { ReactComponent as Arrow } from '../../assets/arrow-up-solid.svg';
import Button from '../Button/Button';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

const Card = ({ city, handleCardButtons }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('button__delete')) {
            handleCardButtons('del', city.id)
        } else {
            handleCardButtons('ref', city.id, city.name);
        }
    };
    const timeInDate = new Date(city.refreshTime);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateForHumans = timeInDate.toLocaleString('ru-BY', options).substring(0, 13);
    const timeForHumans = timeInDate.toTimeString();
    return (
        <aside className="city-card" >
            <header>
                {city.name}
            </header>
            <article>
                <p>Температура: {city.temp}&#176;C
                    <img
                        alt={city.alt}
                        data-tip={city.tooltip}
                        src={`http://openweathermap.org/img/wn/${city.icon}.png`}
                    ></img>
                </p>
                <p>Влажность: {city.humidity}% </p>
                <p>Давление: {city.pressure}</p>
                <p>Сила и направление ветра: {city.windSpeed}м\с
                    <Arrow
                        className="city-card__arrow"
                        style={{ 'transform': `rotate(${city.windDeg}deg)` }}
                    />
                </p>
                <p>Последнее обновление:
                    <span>{dateForHumans}</span>
                    <span>{timeForHumans.slice(0, 17)}</span>
                </p>
                <div className="city-card__button-area">
                    <Button text="Удалить" onClick={handleClick} />
                    <Button text="Обновить" onClick={handleClick} />
                </div>
                <ReactTooltip />
            </article>
        </aside>
    )
};

Card.propTypes = {
    city: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        temp: PropTypes.number,
        alt: PropTypes.string,
        tooltip: PropTypes.string,
        icon: PropTypes.string,
        humidity: PropTypes.number,
        pressure: PropTypes.number,
        windSpeed: PropTypes.number,
        windDeg: PropTypes.number,
        refreshTime: PropTypes.number,
    }).isRequired,
    handleCardButtons: PropTypes.func,
};
Card.defaultProps = {
    handleCardButtons: () => { console.error('Oops, cant find handleCardButtons function') },
};

export default Card;