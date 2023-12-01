import ItemUser from '../itemUser/ItemUser';

import scss from './ListUsers.module.scss';

const ListUsers = ({ listUsers }) => {
    return (
        <ul className={scss.listUsers}>
            {!!listUsers 
                ? listUsers.map((user) => <ItemUser key={user.id} userData={user} />)
                : <div>Loading...</div>
            }
        </ul>
    );
};

export default ListUsers;