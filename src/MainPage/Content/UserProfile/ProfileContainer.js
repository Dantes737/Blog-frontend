import React from 'react';
import UserProfile from './UserProfile.js';
import { connect } from 'react-redux';
import { getUserProfile } from '../../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import {WithAuthRedirect} from '../../../hoc/withAuthRedirect.js'

class ProfileConteiner extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '605d04e17531eb1a306e0b18'
        }
        this.props.getUserProfile(userId)
    }
    render() {

        return (
            <UserProfile {...this.props} />
        )
    };
};


let AuthRedirectComponent =WithAuthRedirect(ProfileConteiner) ;


let mapStateToProps = (state) => ({
    profile: state.myProfile.profile
});

let WithUrlDataConteinerComp = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataConteinerComp);