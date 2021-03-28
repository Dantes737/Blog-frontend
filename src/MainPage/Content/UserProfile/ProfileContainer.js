import React from 'react';
import UserProfile from './UserProfile.js';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../../redux/profile-reducer'

class ProfileConteiner extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:5050/users/u-profile/605b53fa8860532418bdb341`)
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

let mapStateToProps=(state)=>({
    profile:state.myProfile.profile
});


export default connect(mapStateToProps,{setUserProfile})(ProfileConteiner);