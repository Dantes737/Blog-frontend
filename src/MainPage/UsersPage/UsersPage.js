import React from 'react';
import { NavLink} from 'react-router-dom';
import './UsersPage.css';
import userAvatar from '../../assets/images/user-avatar.png';
import Preloader from '../../Preloader/Preloader';



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
                onClick={() => { props.onPageChanged(p); props.setCurrentPage(p) }}
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
                                <button disabled={props.followingInProgres.some(id => id === u._id)} onClick={() => {
                                    props.unfollow(u._id);

                                }}>Unfollow</button>
                                :
                                <button disabled={props.followingInProgres.some(id => id === u._id)} onClick={() => {
                                    props.follow(u._id);

                                }}>Follow</button>}
                        </div>
                    </div>)
                }
            </div>
        }
    </div>

}

export default UsersPage;