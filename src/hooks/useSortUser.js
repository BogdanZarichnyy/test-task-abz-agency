import { useMemo } from 'react';

export const useSortedUsersByDate = (users, sort) => {
    const sortedUsers = useMemo(() => {
        if (sort) {
            return [...users].sort((prevUser, user) => user[sort] - prevUser[sort]);
        }
        return users;
    }, [users, sort]);

    return sortedUsers;
}