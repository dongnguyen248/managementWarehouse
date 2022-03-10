import axios from 'axios';

const apiUrl =
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? process.env.REACT_APP_API_URL_DEV
        : process.env.REACT_APP_API_URL_PROD;
let TOKEN = '';

if (JSON.parse(localStorage.getItem('persist:root')) != null) {
    if (
        JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
            .currentUser != null
    ) {
        TOKEN = JSON.parse(
            JSON.parse(localStorage.getItem('persist:root')).user,
        ).currentUser.token;
    }
}
export const publicRequest = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});
export const userRequest = axios.create({
    baseURL: apiUrl,
    headers: { Authorization: `Bearer ${TOKEN}` },
});
console.log(TOKEN);
