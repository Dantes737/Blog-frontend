import React from 'react';
import UserProfile from './UserProfile.js';
import { connect } from 'react-redux';
import { getUserProfile } from '../../../redux/profile-reducer'
import { Redirect, withRouter } from 'react-router-dom';

class ProfileConteiner extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '605d04e17531eb1a306e0b18'
        }
        this.props.getUserProfile(userId)
    }
    render() {
        if (!this.props.isAuth) return <Redirect to="/login"/>
       // АБО ====>>>> if (this.props.isAuth===false) return <Redirect to="/login"/>
        return (
            <UserProfile {...this.props} isAuth={this.props.isAuth}/>
        )
    };
};

let mapStateToProps = (state) => ({
    profile: state.myProfile.profile,
    isAuth:state.auth.isAuth
});

let WithUrlDataConteinerComp = withRouter(ProfileConteiner);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataConteinerComp);