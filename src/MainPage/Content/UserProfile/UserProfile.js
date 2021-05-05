import React from 'react';
import Preloader from '../../../components/Preloader/Preloader.js';
import './UserProfile.css';
import ProfileStatus from './ProfileStatus.js';
import ProfileImg from './ProfileImg.js';
import ProfileName from './ProfileName.js';
import EditPage from '../../../components/EditComp/EditComp.js'
import CustomePost from '../../../components/PostComponent/MyPost.js';
import CustomeComments from '../../../components/CommentsComponent/MyComments.js';


function UserProfile(props) {
    let postsConp = props.myPosts.map(post => <CustomePost key={post._id} deletePost={props.deletePostFromDB} post_ID={post._id} title={post.title} img={post.img} text={post.text} />)
    let commentsConp = props.myComents.map(comment => <CustomeComments key={comment._id} deleteComment={props.deleteCommentFromDB} comment_ID={comment._id} text={comment.text} />)
    if (!props.profile) {
        return <Preloader />

    }
    else {
        return (
            <div className="userprof">
                <div>
                    <div className="userInfo">
                        <img style={{ float: "left" }} className="userFoto" alt="img gone" src={props.avatar} />
                        <div style={{ display: "inline-block" }}>
                            <div style={{ fontSize: "24px", float: "left" }}>
                            <ProfileName userId={props.id} name={props.name} updateName={props.updateName} />
                                <div >User age: {props.profile.age} years</div>
                                <div >Nick: {props.profile.nick}</div>
                                <div><span>Country: {props.profile.country}</span> <span>City: {props.profile.city}</span></div>
                                <ProfileStatus userId={props.id} status={props.status} updateStatus={props.updateStatus} />
                                {props.profile.friends ?
                                    <div style={{color:"purple"}}>Friends: {props.profile.friends.map(f => <span key={f}> {f}</span>)}</div>
                                    :
                                    <div>Zero (((</div>
                                }
                            </div>
                        </div>
                        <ProfileImg userId={props.id} userImg={props.avatar} updateAvatar={props.updateAvatar} />
                        <EditPage/>
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