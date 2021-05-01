import React, { useEffect, useState } from 'react';
import { NavLink} from 'react-router-dom';
import './UsersPage.css';
import userAvatar from '../../assets/images/user-avatar.png';
import Preloader from '../../components/Preloader/Preloader.js';



let UsersPage = (props) => {
const [friends, setFriends] = useState(props.profileFriends)

    useEffect(() => {
        setFriends(props.profileFriends);
    }, [props.profileFriends])
  
    let haveUserFriends=(user)=>{
        if (friends&&friends!==null) {
            return friends.find(el=>el===user)
        } else {
            return false
        }
    }



    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };
    
    return <div className="userspage">
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
                        <div className="nickDD" > Email:{u.email}</div>

                        <div>
                            
                            {haveUserFriends(u.nick) ?
                                <button disabled={props.followingInProgres.some(nick => nick === u.nick)} onClick={() => {
                                    props.unfollow({
                                        authUserId:props.authUserId,
                                        nick:u.nick});

                                }}>Unfollow</button>
                                :
                                <button disabled={props.followingInProgres.some(nick => nick === u.nick)} onClick={() => {
                                    props.follow({
                                        authUserId:props.authUserId,
                                        nick:u.nick});

                                }}>Follow</button>}
                        </div>
                    </div>)
                }
            </div>
        }
    </div>

}

export default UsersPage;