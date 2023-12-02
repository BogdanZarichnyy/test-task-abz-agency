// import { useState, useEffect } from 'react';
import FormPostUser from '../formPostUser/FormPostUser';
import textsHeaders from '../../assets/texts/textsHeaders';

// import { getPositions } from '../../api/fetching';
// import { usePositionsUsers } from '../../hooks/usePositionsUsers';

import scss from './Footer.module.scss';

const Footer = () => {
    // const [positions, setPositions] = useState([]);

    // usePositionsUsers(setPositions);

    // useEffect(() => {
    //     getPositions(setPositions);
    // }, []);

    return (
        <footer className={scss.footer}>
            <div className='container'>

                <h2 className={scss.title}>{textsHeaders.footer}</h2>

                <FormPostUser />

            </div>
        </footer>
    );
};

export default Footer;