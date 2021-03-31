import './button.scss';
import PropTypes from 'prop-types';

const Button =({text, onClick})=>{
    let delButtonClass;
    if(text === 'Удалить'){
    delButtonClass = 'button__delete';
    }
    return (
        <button className={`button ${delButtonClass? delButtonClass: ''}`} onClick={onClick}>
            {text}
        </button>
    )
};

Button.propTypes = {
    text: PropTypes.string
}
Button.defaultProps = {
   text: ''
};

export default Button;