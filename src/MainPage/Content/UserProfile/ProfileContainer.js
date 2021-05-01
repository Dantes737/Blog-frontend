import React from 'react';
import UserProfile from './UserProfile.js';
import { connect } from 'react-redux';
import { getUserProfile, updateStatus } from '../../../redux/profile-reducer'
import { getOnlyUserPosts } from '../../../redux/posts-reducer.js'
import { getOnlyUserComents } from '../../../redux/coments-reducer.js'

import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../../hoc/withAuthRedirect.js'
import { compose } from 'redux';

class ProfileConteiner extends React.Component {
    componentDidMount() {
        let iD = this.props.id;
        this.props.getUserProfile(iD);
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
    id: state.auth.userId,
    nick: state.auth.nick,
    myPosts: state.myPosts.posts,
    myComents: state.myComents.coments,
});

export default compose(
    connect(mapStateToProps, { updateStatus, getUserProfile, getOnlyUserPosts,getOnlyUserComents }),
    withRouter,
    WithAuthRedirect
)(ProfileConteiner);
