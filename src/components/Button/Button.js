import './button.scss';
import PropTypes from 'prop-types';

const Button =({text})=>{
    let delButtonClass
    if(text === 'Удалить'){
    delButtonClass = 'button__delete';
    }
    return (
        <button className={`button ${delButtonClass? delButtonClass: ''}`}>
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

export default Button