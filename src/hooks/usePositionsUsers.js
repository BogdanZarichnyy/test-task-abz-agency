import { useMemo } from 'react';

import { getPositions } from '../api/fetching';

export const usePositionsUsers = (positions, setPositions) => {
    // console.log(setPositions);
    const positionsUsers = useMemo(() => getPositions(setPositions), [positions.length]);
    return positionsUsers;
}