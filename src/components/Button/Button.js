import './button.scss';
import PropTypes from 'prop-types';

const Button =({text})=>{
    return (
        <button className={`${text.toLowerCase()} button`}>
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