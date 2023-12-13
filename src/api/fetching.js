const urlFetchRequestForGetToken = new URL('https://frontend-test-assignment-api.abz.agency/api/v1/token');
const urlFetchRequestForGetPositions = new URL('https://frontend-test-assignment-api.abz.agency/api/v1/positions');
// const urlFetchRequestForGetUsers = new URL('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6');
// const urlFetchRequestForPostUsers = new URL('https://frontend-test-assignment-api.abz.agency/api/v1/users');

export const getToken = () => {
    fetch(urlFetchRequestForGetToken)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then((data) => {
            if (data.success) {
                localStorage.setItem("token", JSON.stringify(data.token));
            }
        })
        .catch((error) => console.log(error));
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
    fetch(urlFetchRequestForGetPositions)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then((data) => setPositions(data.positions))
        .catch((error) => console.log(error) );
}

// export const getFirstUsers = (setNextUrl, setUsers) => {
//     fetch(urlFetchRequestForGetUsers)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             setNextUrl(data.links.next_url);
//             setUsers(data.users);
//         })
//         .catch((error) => console.log(error));
// }

// export const getMoreUsers = (setIsShowPreloader, nextUrl, setNextUrl, users, setUsers) => {
//     fetch(nextUrl)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             setIsShowPreloader(true);
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             setNextUrl(data.links.next_url);
//             if (data.users.length === 0) {
//                 setNextUrl('');
//             }
//             setUsers([ ...users, ...data.users ]);
//         })
//         .catch((error) => console.log(error))
//         .finally(() => setIsShowPreloader(false));
// }

// export const postAddUser =  async (user, setIsSuccessfullyRegistered) => {
//     let userToken = localStorage.getItem("token");
//     if (!userToken) {
//         userToken = await getToken();
//     }
//     const parsedUserToken = JSON.parse(userToken);

//     fetch(urlFetchRequestForPostUsers, 
//         { 
//             method: 'POST', 
//             body: user, 
//             headers: { 
//                 // 'Content-Type': 'multipart/form-data', 
//                 'Token': parsedUserToken 
//             } 
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             if (data.success) {
//                 setIsSuccessfullyRegistered(data.success);
//             }
//         })
//         .catch((error) => console.log(error))
//         .finally(() => setTimeout(() => setIsSuccessfullyRegistered(false), 3000));
// }