export const usersSelector = state => state.users.users;
export const nextUrlSelector = state => state.users.nextUrl;
export const pageSelector = state => state.users.page;
export const countSelector = state => state.users.count;

export const positionsSelector = state => {
    // console.log(state.positions.positions);
    return state.positions.positions;
};