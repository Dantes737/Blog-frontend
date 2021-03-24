import * as axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './UsersPage.css';
import userAvatar from '../../assets/images/user-avatar.png';



class UsersPage extends React.Component {
    //   let a=  `http://localhost:5050/users/list?page=3&limit=3`

    componentDidMount() {
        axios.get(`http://localhost:5050/users/list?page=${this.props.currentPage}&limit=${this.props.pageSize}`)
            .then((response) => (response.data))
            .then((resData) => {
                // console.log('! BackEnd-Data !');
                // приходить обєкт з трьома внутрішніми обєктами
                //previous=>попередній список користувачів
                //results=>даний список користувачів
                //next=>наступний список
                // console.log(resData.results);
                this.props.setUsers(resData.results)
            })

    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        };

        return <div className="userspage">
            <NavLink to="/">Go home</NavLink>
            <div>Pages of users:
   {pages.map(p => {
                return <span className={this.props.currentPage === p && 'selectedPage'}>{p}</span>
            })}
            </div>
            {
                this.props.users.map(u => <div key={u._id} className="user">

                    <div className="imgdd" ><img className="uIMG" src={u.avatarIMG != null ? u.avatarIMG : userAvatar} alt="User avatar" /></div>
                    <div className="nickDD" >{u.nick} </div>
                    <div className="nickDD" > ID:{u._id}</div>
                    <div className="nickDD" > Email:{u.email}</div>

                    <div>
                        {u.followed ?
                            <button onClick={() => { this.props.unfollow(u._id) }}>Unfollow</button>
                            :
                            <button onClick={() => { this.props.follow(u._id) }}>Follow</button>}
                    </div>
                </div>)
            }
        </div>
    }
}

export default UsersPage;