import PropTypes from 'prop-types';

import scss from './Button.module.scss';

const Button = ({ styles, text, onClick, type = 'button', disabled = false }) => {
    return (
        <button className={[scss.button, styles].join(" ")} onClick={onClick} type={type} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button;

Button.propTypes = {
    styles: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool,
};