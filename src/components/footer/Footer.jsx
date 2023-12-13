import { useState } from 'react';
import FormPostUser from '../formPostUser/FormPostUser';
import textsHeaders from '../../assets/texts/textsHeaders';
import Successfully from '../successfully/Successfully';

import scss from './Footer.module.scss';

const Footer = () => {
    const [isSuccessfullyRegistered, setIsSuccessfullyRegistered] = useState(false);

    return (
        <footer className={[scss.footer, isSuccessfullyRegistered && scss.successfully].join(" ")}>
            <div className='container'>

                <h2 className={scss.title}>{!isSuccessfullyRegistered ? textsHeaders.footer : textsHeaders.successfully}</h2>
                
                {!isSuccessfullyRegistered
                    ? <FormPostUser setIsSuccessfullyRegistered={setIsSuccessfullyRegistered}/>
                    : <Successfully />
                }

            </div>
        </footer>
    );
};

export default Footer;