import React from 'react';
import { NavLink } from 'react-router-dom';
import './UsersPage.css';
import userAvatar from '../../assets/images/user-avatar.png';
import Preloader from '../../Preloader/Preloader';
import * as axios from 'axios';


let UsersPage = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return <div className="userspage">
        <NavLink to="/">Go home</NavLink>
        <div>Pages of users:
        {pages.map(p => {
            return <span key={p}
                onClick={() => { props.onPageChanged(p) }}
                // className={props.currentPage === p && 'selectedPage'}
                className={props.currentPage === p ? 'selectedPage' : 'notSelectedPage'}

            >
                {p}
            </span>
        })}
        </div>
        {props.isFetching ?
            <Preloader />
            :
            <div>
                {
                    props.users.map(u => <div key={u._id} className="user">
                        <NavLink to={`/profile/${u._id}`}>
                            <div className="imgdd" ><img className="uIMG" src={u.avatarIMG != null ? u.avatarIMG : userAvatar} alt="User avatar" /></div>
                        </NavLink>
                        <div className="nickDD" >{u.nick} </div>
                        <div className="nickDD" > ID:{u._id}</div>
                        <div className="nickDD" > Email:{u.email}</div>

                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    axios.post('http://localhost:5050/profiles/unfollow',
                                    {userId: u._id})
                                  .then((res) => res.data)
                                  .then((data) =>{if(data.success===true){
                                    props.unfollow(u._id)
                                }})
                            //     axios.post('http://localhost:5050/profiles/follow',
                            //     {userId: u._id},{headers:{
                            //         "MY-TOKEN-KEY":""
                            //     }})
                            //   .then((res) => res.data)
                            //   .then((data) =>{if(data.success===true){
                            //       props.follow(u._id)
                            //   }})
                                    }}>Unfollow</button>
                                :
                                <button onClick={() => {
                                    axios.post('http://localhost:5050/profiles/follow',
                                    {userId: u._id})
                                  .then((res) => res.data)
                                  .then((data) =>{if(data.success===true){
                                      props.follow(u._id)
                                  }})
                                }}>Follow</button>}
                        </div>
                    </div>)
                }
            </div>
        }
    </div>

}

export default UsersPage;