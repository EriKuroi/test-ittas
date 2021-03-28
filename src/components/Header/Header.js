import './header.scss'
import Select from 'react-select'

const Header = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <header className="main-header">
            <h1>Select city to track</h1>
            <div className="main-header__select-area">
                <Select options={options}></Select>
            </div>
        </header>
    )
};

export default Header