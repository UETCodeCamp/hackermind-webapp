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

//     export const dataAPI = () => {
//         return fetch("https://uetcc-todo-app.herokuapp.com/draft")
//             .then(reponsive => {
//                 return reponsive.json();
//             });
//     }
//     export const createTodo = (text) => {
//         const request = new Request("https://uetcc-todo-app.herokuapp.com/draft", {
//             method: "POST",
//             headers: {
//                 'Content-Type': ' application/json'
//             },
//             body: JSON.stringify({
//                 title: text
//             })
//         });
//         return fetch(request)
//             .then(response => {
//                 return response.json();
//             });
//     }
//     export const deleteTodo = (id) => {
//         const url = `https://uetcc-todo-app.herokuapp.com/draft/${id}`;
//         const request = new Request(url, {
//             method: 'DELETE'
//         });

//         return fetch(request)
//             .then(response => {
//                 return response.json();
//             });
//     };
//     export const toggleTodo = (id) => {
//         const url = `https://uetcc-todo-app.herokuapp.com/draft/${id}/toggle`;
//         const request = new Request(url, {
//             method: 'POST'
//         });

//         return fetch(request)
//             .then(response => {
//                 return response.json();
//             });
//     };

//     return fetch(request)
//         .then(response => {
//             return response.json();
//         });
// };
// export const login = ({ email, password }) => {
//     const url = `https://uetcc-todo-app.herokuapp.com/login`;
//     const request = new Request(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             email,
//             password,
//         })
//     });

//     return fetch(request)
//         .then(response => {
//             return response.json();
//         });
// };