import * as axios from 'axios';
import store from '../redux/redux-store.js';

// створюємо кастомний модуль , замість використання всієї бібліотеки
// axios і використовуємо в роутах
const instanse = axios.create({
    baseURL: 'http://localhost:5050/'
});

let getToken = () => {
    return store.getState().auth.access_token
};
//////--------------------------------------------------------------------//////

export const profileAPI = {
    getProfile(userId) {
        return instanse.get(`profiles/u-profile/${userId}`,
            { headers: { authorization: `Bearer ${getToken()}` } }
        )
            .then((response) => (response.data))

    },
    updateStatus(user) {
        return instanse.put('profiles/status',
            { headers: { authorization: `Bearer ${getToken()}` } },
            {
                status: user.status,
                userId: user.userId
            })
    },
    getUsers(currentPage, pageSize) {
        return instanse.get(`profiles/list?page=${currentPage}&limit=${pageSize}`,
            { headers: { authorization: `Bearer ${getToken()}` } }
        )
            .then((response) => (response.data))
    },

    getUnfollowed(data) {
        console.log(data);
        return instanse.post('profiles/unfollow',
            { headers: { authorization: `Bearer ${getToken()}` } },
            {
                userNick: data.nick,
                authId: data.authUserId
            })
            .then((res) => res.data)
    },
    getFollowed(data) {
        return instanse.post('profiles/follow',
        { headers: { authorization: `Bearer ${getToken()}` } },
            {
                userNick: data.nick,
                authId: data.authUserId
            })
            .then((res) => res.data)
    }
};

export const authAPI = {
    mySignIn(nick, email, password) {
        return instanse.post('user-auth/signup',
            { nick, email, password }).then((res) => res.data)
    },
    myLogin(email, password) {
        return instanse.post('user-auth/login',
            { email, password }).then((res) => res.data)
    },
    // logOut() {
    //     return instanse.delete('user-auth/login')
    //         .then((res) => res.data)
    // }
};

export const postsAPI = {
    getUserPosts(nick) {
        return instanse.get(`posts/user-posts/${nick}`,
            { headers: { authorization: `Bearer ${getToken()}` } }
        )
            .then((res) => res.data.posts)

    },
    getPosts() {
        return instanse.get(`posts/posts-list`,
            { headers: { authorization: `Bearer ${getToken()}` } }
        )
            .then((res) => res.data.posts)
    },
    addNewPost(data) {
        return instanse.post('posts/add-post',
            {
                title: data.title,
                nick: data.nick,
                text: data.text
            }
        )
            .then((res) => res.data.posts)
    },
    delPost(id) {
        return instanse.delete(`posts/deletePost/${id}`)
            .then((res) => res.data.post)
    }
};
export const commentsAPI = {
    getComments() {
        return instanse.get('coments/comments-list',
            { headers: { authorization: `Bearer ${getToken()}` } })
            .then((res) => res.data.comments)
    },
    getUserComments(nick) {
        return instanse.get(`coments/user-comments/${nick}`,
            { headers: { authorization: `Bearer ${getToken()}` } }
        )
            .then((res) => res.data.comments)
    },

    addNewComment(data) {
        return instanse.post('coments/add-comment',
            {
                postID: data.post_id,
                nick: data.nick,
                text: data.text
            }
        )
            .then((res) => res.data.comments)
    },
    delComment(id) {
        return instanse.delete(`coments/deleteComment/${id}`)
            .then((res) => res.data.comment)
    }
};