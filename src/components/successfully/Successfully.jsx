import textsParagraphs from '../../assets/texts/textsParagraphs';

import sprite from '../../images/sprite.svg';

import scss from './Successfully.module.scss';

const Successfully = () => {
    return (
        <>
            <svg className={scss.successfullyImage} width='328' height='290'>
                <use id="success-image" href={`${sprite}#success-image`} />
            </svg>

            <p className={scss.successfullyText}>{textsParagraphs.successfully}</p>
        </>
    );
};

export default Successfully;