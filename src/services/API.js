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
            'token': localStorage.token
        }
    })
    return fetch(request)
        .then(response => {
            return response.json();
        });
};

export const getAllCourse = () => {
    const url = domain + `/courses`;
    const request = new Request(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.token
        }
    })
    return fetch(request)
        .then(response => {
            return response.json();
        });
};

export const getChapter = (id) => {
    const url = domain + `/courses/` + id + `/chapters`;
    const request = new Request(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.token
        }
    })
    return fetch(request)
        .then(response => {
            return response.json();
        });
};


export const getCourse = (id) => {
    const url = domain + `/courses/` + id ;
    const request = new Request(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.token
        }
    })
    return fetch(request)
        .then(response => {
            return response.json();
        });
};

export const getVideo = (chapterID, id) => {
    const url = domain + `/courses/chapters/` + chapterID + `/videos/` + id;
    const request = new Request(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.token
        }
    })
    return fetch(request)
        .then(response => {
            return response.json();
        });
};

export const commentVideo = ( id, content ) => {
    console.log(id,content);
    const url = domain + `/courses/chapters/videos/`+id+`/comments`;
    const request = new Request(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.token
        },
        body: JSON.stringify({
            content: content,
            image: "abc.com"
        })
    })
    return fetch(request)
        .then(response => {
            return response.json();
        });
};

export const getQuiz = (chapterID, id) => {
    const url = domain + `/courses/chapters/` + chapterID + `/quizzes/` + id;
    const request = new Request(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.token
        }
    })
    return fetch(request)
        .then(response => {
            return response.json();
        });
};

export const checkPortal = (id) => {
    const url = domain + `/courses/`+id+`/users`;
    const request = new Request(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.token
        }
    })
    return fetch(request)
        .then(response => {
            return response.json();
        });
};

export const getTeamMate = (id) => {
    const url = domain + `/users/teams/`+id+`/teammates`;
    const request = new Request(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.token
        }
    })
    return fetch(request)
        .then(response => {
            return response.json();
        });
};

export const submitQuiz = (questions,id) => {
    const url = domain + `/courses/chapters/quizzes/`+id+`/check_answer`;
    const request = new Request(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.token
        },
        body: JSON.stringify({
            questions
        })
    })
    return fetch(request)
        .then(response => {
            return response.json();
        });
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("user_name");
    localStorage.removeItem("avatar");
}