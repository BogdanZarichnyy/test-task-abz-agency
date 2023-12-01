import { NavLink } from 'react-router-dom';

import sprite from '../../images/sprite.svg';

import scss from './Logo.module.scss';

const Logo = () => {   
    return (
        <NavLink className={scss.logo} to="/" end>
            <svg className={scss.logoIcon} width="104" height="26">
                <use id="logo" href={`${sprite}#logo`} />
            </svg>
        </NavLink>
    );
};

export default Logo;