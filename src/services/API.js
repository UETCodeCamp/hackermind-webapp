const domain = "https://api.hackermind.dev/api/v1";

export const register = ({ email, user_name, password, name }) => {
    const url = domain + `/users/register`;
    const request = new Request(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            user_name,
            password,
            name
        })
    })
    return fetch(request)
        .then(response => {
            return response.json();
        });
};

export const login = ({ user_name, password }) => {
    const url = domain + `/users/login`;
    const request = new Request(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_name,
            password
        })
    })
    return fetch(request)
        .then(response => {
            return response.json();
        });
};

export const getProfile = () => {
    const url = domain + `/users/profiles`;
    const request = new Request(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token':localStorage.token
        } 
    })
    return fetch(request)
        .then(response => {
            return response.json();
        });
};
