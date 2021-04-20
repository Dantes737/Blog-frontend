import React from 'react';
import UserProfile from './UserProfile.js';
import { connect } from 'react-redux';
import { getUserProfile,getStatus,updateStatus } from '../../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../../hoc/withAuthRedirect.js'
import { compose } from 'redux';

class ProfileConteiner extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '605d04e17531eb1a306e0b18'
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    render() {

        return (
            <UserProfile {...this.props} />
        )
    };
};

let mapStateToProps = (state) => ({
    profile: state.myProfile.profile,
    status:state.myProfile.status
});

export default compose(
    connect(mapStateToProps, {getStatus,updateStatus, getUserProfile }),
    withRouter,
    WithAuthRedirect
)(ProfileConteiner);
