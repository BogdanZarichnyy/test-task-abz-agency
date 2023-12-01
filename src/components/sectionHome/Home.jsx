import Button from '../button/Button';

import textsHeaders from '../../assets/texts/textsHeaders';
import textsParagraphs from '../../assets/texts/textsParagraphs';

import scss from './Home.module.scss';

const Home = () => {

    const handlerSignUp = () => {
        console.log('Sign up');
    }

    return (
        <section className={scss.home}>
            <div className='container'>

                <h1 className={scss.title}>{textsHeaders.home}</h1>

                <p className={scss.paragraph}>{textsParagraphs.home}</p>

                <Button styles={scss.buttonHome} text="Sign up" onClick={handlerSignUp}/>
        
            </div>
        </section>
    );
};

export default Home;