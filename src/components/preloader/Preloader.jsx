import PropTypes from 'prop-types';
import sprite from '../../images/sprite.svg';

import scss from './Preloader.module.scss';

const Preloader = ({ styles }) => {
    return (
        <div className={[scss.preloader, styles].join(" ")}>
            <svg className={scss.preloaderIcon} width='48' height='48'>
                <use id="preloader" href={`${sprite}#preloader`} />
            </svg>
        </div>
    );
};

export default Preloader;

Preloader.propTypes = {
    styles: PropTypes.string
};