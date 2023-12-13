import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../preloader/Preloader';

import { getUserAvatar } from '../../api/fetching';

import { getFormatNumberPhone } from '../../services/formatData';

import sprite from '../../images/sprite.svg';

import scss from './ItemUser.module.scss';

const ItemUser = ({ userData }) => {
    const [urlUserAvatar, setUrlUserAvatar] = useState('');
    const [isShowPreloader, setIsShowPreloader] = useState(false);

    useEffect(() => {
        getUserAvatar(userData.photo, setIsShowPreloader, setUrlUserAvatar);
    }, []);

    return (
        <li className={scss.userCard}>
            {!!urlUserAvatar
                ? isShowPreloader 
                    ? <Preloader styles={scss.preloader}/>
                    : <img className={scss.userPhoto} src={urlUserAvatar} alt={userData.name} title={userData.name} width='70px' height='70px' />
                : <svg className={scss.userPhoto} width='70' height='70'>
                    <use id="avatar" href={`${sprite}#avatar`} />
                </svg>
            }
            <h3 className={scss.userName} title={userData.name}>{userData.name}</h3>
            <p className={scss.userPosition}>{userData.position}</p>
            <p className={scss.userEmail} title={userData.email}>{userData.email}</p>
            <p className={scss.userPhone}>{getFormatNumberPhone(userData.phone)}</p>
        </li>
    );
};

export default ItemUser;

ItemUser.propTypes = {
    userData: PropTypes.shape({
        id: PropTypes.number,
        photo: PropTypes.string,
        name: PropTypes.string,
        position: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string
    }),
}