import Logo from '../logo/Logo';
import Button from '../button/Button';

import scss from './Header.module.scss';

const Header = () => {

    const handlerUsers = () => {
        console.log('Users');
    }

    const handlerSignUp = () => {
        console.log('Sign up');
    }

    return (
        <header className={scss.header}>
            <div className='container'>
                <nav className={scss.wrraper}>

                    <Logo />

                    <div className={scss.navigation}>

                        <Button text='Users' onClick={handlerUsers} />

                        <Button text='Sign up' onClick={handlerSignUp} />

                    </div>
        
                </nav>
            </div>
        </header>
    );
};

export default Header;