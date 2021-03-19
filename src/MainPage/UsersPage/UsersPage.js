import * as axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './UsersPage.css';
import userAvatar from '../../assets/images/user-avatar.png';



function UsersPage(props) {

    if (props.users.length === 0) {
        axios.get("http://localhost:5050/users/list")
            .then((response) => (response.data))
            .then((resData) => {
                // console.log('! BackEnd-Data !');
                // console.log(resData.users);
                props.setUsers(resData.users)
            })
    }

    return <div className="userspage">
        <NavLink to="/">Go home</NavLink>

        {
            props.users.map(u => <div key={u._id} className="user">

                <div className="imgdd" ><img className="uIMG" src={u.avatarIMG != null ? u.avatarIMG : userAvatar} alt="User avatar" /></div>
                <div className="nickDD" >{u.nick} </div>
                <div className="nickDD" > ID:{u._id}</div>
                <div className="nickDD" > Email:{u.email}</div>

                <div>
                    {u.followed ?
                        <button onClick={() => { props.unfollow(u._id) }}>Unfollow</button>
                        :
                        <button onClick={() => { props.follow(u._id) }}>Follow</button>}
                </div>
            </div>)
        }
    </div>

};

export default UsersPage