import * as axios from 'axios';

// створюємо кастомний модуль , замість використання всієї бібліотеки
// axios і використовуємо в роутах
const instanse = axios.create({
    baseURL: 'http://localhost:5050/'
})
// or example
// const instanseWithHeaders=axios.create({
//     withCredentials:true,
//     baseURL:'http://localhost:5050/',
//     headers:{'API-KEY':'JSSJD-SDJSD-SDNSD-SNDSD'}
// })
export const profileAPI = {
    getProfile(userId) {
        return instanse.get(`profiles/u-profile/${userId}`)
            .then((response) => (response.data))
    },
    updateStatus(user) {
        return instanse.put('profiles/status', {
            status: user.status,
            userId: user.userId
        })
    },
    getUsers(currentPage, pageSize) {
        return instanse.get(`profiles/list?page=${currentPage}&limit=${pageSize}`)
            .then((response) => (response.data))
    },

    getUnfollowed(data) {
        console.log(data);
        return instanse.post('profiles/unfollow',
            {
                userNick: data.nick,
                authId: data.authUserId
            })
            .then((res) => res.data)
    },
    getFollowed(data) {
        return instanse.post('profiles/follow',
            {
                userNick: data.nick,
                authId: data.authUserId
            })
            .then((res) => res.data)
    },
    getLogin() {
        return instanse.post('users/login',
            { email: 'test1.8@gmail.com', password: 'test1' })
            .then((res) => res.data)
    }
};

// export const usersAPI = {
//     getLogin() {
//         return instanse.post('user-auth/login',
//             { email: 'test1.8@gmail.com', password: 'test1' })
//             .then((res) => res.data)
//     }
// };
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
        return instanse.get(`posts/user-posts/${nick}`)
            .then((res) => res.data.posts)

    },
    getPosts() {

        return instanse.get(`posts/posts-list`)
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
    delPost(id){
        return instanse.delete(`posts/deletePost/${id}`)
    }
};
export const commentsAPI = {
    getComments() {
        return instanse.get('coments/comments-list')
            .then((res) => res.data.comments)
    },
    getUserComments(nick) {
        return instanse.get(`coments/user-comments/${nick}`)
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
    delComment(id){
        return instanse.delete(`coments/deleteComment/${id}`)
    }
};