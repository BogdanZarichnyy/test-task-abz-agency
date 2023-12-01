import { useMemo } from 'react';

export const useSortedUsersByDate = (users, sort) => {
    const sortedUsers = useMemo(() => {
        if (sort) {
            return [...users].sort((prevUser, user) => prevUser[sort] - user[sort]);
        }
        return users;
    }, [users, sort]);

    return sortedUsers;
}