import React from 'react';
import UserProfile from './UserProfile.js';
import { connect } from 'react-redux';
import { getUserProfile,getStatus,updateStatus } from '../../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../../hoc/withAuthRedirect.js'
import { compose } from 'redux';

class ProfileConteiner extends React.Component {
    componentDidMount() {
        let iD = this.props.id;
        this.props.getUserProfile(iD)
        this.props.getStatus(iD)
    }
    render() {

        return (
            <UserProfile {...this.props} />
        )
    };
};

let mapStateToProps = (state) => ({
    profile: state.myProfile.profile,
    status:state.myProfile.status,
    id:state.auth.userId
});

export default compose(
    connect(mapStateToProps, {getStatus,updateStatus, getUserProfile }),
    withRouter,
    WithAuthRedirect
)(ProfileConteiner);
