import React from 'react';
import UserProfile from './UserProfile.js';
import { connect } from 'react-redux';
import { getAllUsers } from '../../../redux/users-reducer.js'
import { getUserProfile, updateStatus,updateName,updateAvatar } from '../../../redux/profile-reducer'
import { getOnlyUserPosts, deletePostFromDB } from '../../../redux/posts-reducer.js'
import { getOnlyUserComents, deleteCommentFromDB } from '../../../redux/coments-reducer.js'

import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../../hoc/withAuthRedirect.js'
import { compose } from 'redux';

class ProfileConteiner extends React.Component {
    componentDidMount() {
        let iD = this.props.id;
        this.props.getUserProfile(iD);
        this.props.getAllUsers();
        this.props.getOnlyUserPosts(this.props.nick);
        this.props.getOnlyUserComents(this.props.nick);
    };
    render() {

        return (
            <UserProfile {...this.props} />
        )
    };
};

let mapStateToProps = (state) => ({
    profile: state.myProfile.profile,
    status: state.myProfile.status,
    name: state.myProfile.name,
    avatar: state.myProfile.userAvatar,
    id: state.auth.userId,
    nick: state.auth.nick,
    myPosts: state.myPosts.posts,
    myComents: state.myComents.coments,
});

export default compose(
    connect(mapStateToProps,
        {
            updateStatus,
            getAllUsers,
            updateName,
            updateAvatar,
            getUserProfile,
            deletePostFromDB,
            deleteCommentFromDB,
            getOnlyUserPosts,
            getOnlyUserComents
        }),
    withRouter,
    WithAuthRedirect
)(ProfileConteiner);
