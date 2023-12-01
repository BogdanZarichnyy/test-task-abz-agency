// import axios from "axios";

export const getUsersFirst = (setNextUrl, setUsers) => {
    // try {
    //     const response = await axios.get("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6");
    //     console.log(response);
    //     console.log(response.data);
    //     setNextUrl(response.data.links.next_url);
    //     setUsers(response.data.users);
    // }
    // catch (error) {
    //     console.log(error)
    // }

    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            // console.log(response);
            // console.log(response.headers);
            return response.json();
        })
        .then((data) => {
            // console.log(data);
            setNextUrl(data.links.next_url);
            setUsers(data.users);
        })
        .catch((error) => console.log(error));
}

export const getMoreUsers = (setIsShowPreloader, nextUrl, setNextUrl, users, setUsers) => {
    // try {
    //     await setIsShowPreloader(true);
    //     const response = await axios.get(nextUrl);
    //     console.log(response.data);
    //     setNextUrl(response.data.links.next_url);
    //     setUsers([ ...users, ...response.data.users ]);
    // }
    // catch (error) {
    //     console.log(error)
    // }
    // finally {
    //     setIsShowPreloader(false);
    // }

    fetch(nextUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            setIsShowPreloader(true);
            return response.json();
        })
        .then((data) => {
            setNextUrl(data.links.next_url);
            setUsers([ ...users, ...data.users ]);
        })
        .catch((error) => console.log(error))
        .finally(() => setIsShowPreloader(false));
}

export const getUserAvatar = (userPhoto, setIsShowPreloader, setUrlUserAvatar) => {
    fetch(userPhoto)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            setIsShowPreloader(true);
            return response.blob();
        })
        .then((userAvatar) => setUrlUserAvatar(URL.createObjectURL(userAvatar)))
        .catch((error) => { 
            console.log(error);
            setUrlUserAvatar('');
        })
        .finally(() => setTimeout(() => setIsShowPreloader(false), 1000));
}

export const getPositions = (setPositions) => {
    // console.log(setPositions);
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then((data) => setPositions(data.positions))
        .catch((error) => console.log(error) );
}

// export const postAddUser =  async (contact, thunkAPI) => {
//     try {
//         const response = await fetch(`${REACT_APP_MOCKAPI_URL}`, { method: 'POST', body: JSON.stringify(contact), headers: { 'Content-Type': 'application/json' } }).then(response => {return response.json()});
//         return response;
//     }
//     catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//     }
// }