import { useEffect } from 'react';
import Preloader from '../preloader/Preloader';
import ListUsers from '../listUsers/ListUsers';
import Button from '../button/Button';

import { useDispatch, useSelector } from 'react-redux';
import { usersSelector, nextUrlSelector, isLoadingSelector, pageSelector } from '../../redux/selectors';
import { getUsersThunk } from '../../redux/thunks/usersThunk';
import { setPage } from '../../redux/slices/usersSlice';

import { getToken } from '../../api/fetching';

import { useSortedUsersByDate } from '../../hooks/useSortUser';

import textsHeaders from '../../assets/texts/textsHeaders';

import scss from './Profiles.module.scss';

const Profiles = () => {

    const dispatch = useDispatch();
    const listUsersSelector = useSelector(usersSelector);
    const isNextUrlSelector = useSelector(nextUrlSelector);
    const showPreloaderSelector = useSelector(isLoadingSelector);
    const numberPageSelector = useSelector(pageSelector);

    const sortedUsersByDate = useSortedUsersByDate(listUsersSelector, 'registration_timestamp');

    useEffect(() => {
        dispatch(getUsersThunk());
        getToken();
    }, [numberPageSelector]);

    const handlerShowMoreUsers = () => {
        dispatch(setPage(numberPageSelector + 1));
    }

    return (
        <section className={scss.profiles}>
            <div className='container'>

                <h2 className={scss.title}>{textsHeaders.cards}</h2>

                {!sortedUsersByDate.length 
                    ? <Preloader styles={scss.preloader}/>
                    : <>
                        <ListUsers listUsers={sortedUsersByDate}/>

                        {showPreloaderSelector && <Preloader styles={scss.preloader}/>}

                        {!!isNextUrlSelector &&
                            <Button styles={scss.buttonProfiles} text="Show more" onClick={handlerShowMoreUsers}/>
                        }
                    </>
                }

            </div>
        </section>
    );
};

export default Profiles;