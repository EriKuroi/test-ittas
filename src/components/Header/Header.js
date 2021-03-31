import './header.scss';
import Select from 'react-select';
import cities from '../../capitals.json';
const Header = ({ handleCityChoice }) => {
     return (
        <header className="main-header">
            <h1>Выберите город</h1>
            <div className="main-header__select-area">
                <Select
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            text: '#015249',
                            primary25: '#77c9d4',
                            primary: '#015249',
                        },
                    })}
                    placeholder="Название"
                    options={cities}
                    onChange={handleCityChoice}
                ></Select>
            </div>
        </header>
    )
};

export default Header