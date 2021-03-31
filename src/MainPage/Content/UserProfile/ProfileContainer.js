import React from 'react';
import UserProfile from './UserProfile.js';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';

class ProfileConteiner extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '605d04e17531eb1a306e0b18'
        }
        axios.get(`http://localhost:5050/profiles/u-profile/${userId}`)
            .then((response) => (response.data))
            .then((resData) => {
                this.props.setUserProfile(resData.user);
            })
    }
    render() {
        return (
            <UserProfile {...this.props} profile={this.props.profile} />
        )
    };
};

let mapStateToProps = (state) => ({
    profile: state.myProfile.profile
});

let WithUrlDataConteinerComp = withRouter(ProfileConteiner);

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataConteinerComp);