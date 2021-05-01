import React from 'react';
import Preloader from '../../../components/Preloader/Preloader.js';
import './UserProfile.css';
import ProfileStatus from './ProfileStatus.js';
import CustomePost from '../../../components/PostComponent/MyPost.js';
import CustomeComments from '../../../components/CommentsComponent/MyComments.js';


function UserProfile(props) {
    let postsConp = props.myPosts.map(post => <CustomePost key={post._id} post_ID={post._id} title={post.title} img={post.img} text={post.text} />)
    let commentsConp = props.myComents.map(comment => <CustomeComments key={comment._id} comment_ID={comment._id} text={comment.text} />)
    if (!props.profile) {
        return <Preloader />

    }
    else {
        return (
            <div className="userprof">
                <div>
                    <img className="userFoto" alt="img gone" src={props.profile.avatarIMG} />
                    <div className="userInfo">
                        <div>Нікнейм: {props.profile.nick}</div>
                        <div>Місто: {props.profile.city}</div>
                        <ProfileStatus userId={props.id} status={props.profile.status} updateStatus={props.updateStatus} />
                        {props.profile.friends ?
                            <ul>Friends:
                                {props.profile.friends.map(f => <li key={f}>{f}</li>)}
                            </ul>
                            :
                            <div>Zero (((</div>
                        }
                    </div>
                </div>
                <hr />
                <div>{props.profile.nick} posts:</div>
                {postsConp}
                <hr />
                <div>{props.profile.nick} comments.</div>
                {commentsConp}
            </div>
        )
    }
};




export default UserProfile