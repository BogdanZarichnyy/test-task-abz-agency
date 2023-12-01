import { useEffect, useState } from 'react';
import Preloader from '../preloader/Preloader';
import ListUsers from '../listUsers/ListUsers';
import Button from '../button/Button';

import { getUsersFirst, getMoreUsers } from '../../api/fetching';

import { useSortedUsersByDate } from '../../hooks/useSortUser';

import textsHeaders from '../../assets/texts/textsHeaders';

import scss from './Profiles.module.scss';

const Profiles = () => {
    const [users, setUsers] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [isShowPreloader, setIsShowPreloader] = useState(false);

    const sortedUsersByDate = useSortedUsersByDate(users, 'registration_timestamp');

    useEffect(() => {
        getUsersFirst(setNextUrl, setUsers);
    }, []);
    
    const handlerShowMoreUsers = () => {
        getMoreUsers(setIsShowPreloader, nextUrl, setNextUrl, users, setUsers );
    }

    return (
        <section className={scss.profiles}>
            <div className='container'>

                <h2 className={scss.title}>{textsHeaders.cards}</h2>

                {!sortedUsersByDate.length 
                    ? <Preloader styles={scss.preloader}/>
                    : <>
                        <ListUsers listUsers={sortedUsersByDate}/>

                        {isShowPreloader && <Preloader styles={scss.preloader}/>}

                        {!!nextUrl &&
                            <Button styles={scss.buttonProfiles} text="Show more" onClick={handlerShowMoreUsers}/>
                        }
                    </>
                }

            </div>
        </section>
    );
};

export default Profiles;