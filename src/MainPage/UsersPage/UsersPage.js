import React from 'react';
import { NavLink } from 'react-router-dom';
import './UsersPage.css';

function UsersPage(props) {

    return <div className="userspage">
        <NavLink to="/">Go home</NavLink>

        {
            props.users.map(u => <div key={u.id} className="user">

                <div className="imgdd" ><img className="uIMG" src={u.src} alt="User avatar" /></div>
                <div className="nickDD" >{u.nick} </div>
                <div className="nickDD" > {u.status}{u.followed}</div>
                <div>
                    {u.followed ?
                        <button onClick={() =>  {props.unfollow(u.id)} }>Unfollow</button>
                        :
                        <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                </div>

            </div>)

        }


    </div>

}

export default UsersPage