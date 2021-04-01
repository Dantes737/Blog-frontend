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
export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instanse.get(`profiles/list?page=${currentPage}&limit=${pageSize}`)
            .then((response) => (response.data))
    },
    getProfile(userId) {
        return instanse.get(`profiles/u-profile/${userId}`)
            .then((response) => (response.data))
    },

    getUnfollowed(id) {
        return instanse.post('profiles/unfollow',
            { userId: id })
            .then((res) => res.data)

        //     instanse.post('http://localhost:5050/profiles/follow',
        //     {userId: u._id},{headers:{
        //         "MY-TOKEN-KEY":""
        //     }})
        //   .then((res) => res.data)
    },
    getFollowed(id) {
        return instanse.post('profiles/follow',
            { userId: id })
            .then((res) => res.data)
    },
    getLogin() {
        return instanse.post('users/login',
            { email: 'test1.8@gmail.com', password: 'test1' })
            .then((res) => res.data)
    }
};

export const authAPI = {
    me() {
        return instanse.post('users/login',
            { email: 'test1.8@gmail.com', password: 'test1' })
            .then((res) => res.data)
    }
};
