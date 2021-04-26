import { connect } from 'react-redux';
import { getUsers,  setCurrentPage} from '../../redux/users-reducer';
import {  follow,unfollow ,toggleFollowingProgres} from '../../redux/profile-reducer';

import React from 'react';
import UsersPage from './UsersPage.js';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';

class UsersApiComp extends React.Component {
  //   let a=  `http://localhost:5050/users/list?page=3&limit=3`

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize,this.props.authUserId);
  };

  onPageChanged = (clickedPage) => {
    this.props.getUsers(clickedPage, this.props.pageSize,this.props.authUserId);
  };


  render() {
    return <UsersPage
    authUserId={this.props.authUserId}
      pageSize={this.props.pageSize}
      totalUsersCount={this.props.totalUsersCount}
      currentPage={this.props.currentPage}
      setCurrentPage={this.props.setCurrentPage}
      users={this.props.users}
      onPageChanged={this.onPageChanged}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      isFetching={this.props.isFetching}
      followingInProgres={this.props.followingInProgres}
      profileFriends={this.props.currentProfileFriends}
    />
  }
}



const mapStateToProps = (state) => {
  return {
    currentProfileFriends:state.myProfile.profile.friends,
    authUserId:state.auth.userId,
    users: state.myUsers.users,
    pageSize: state.myUsers.pageSize,
    totalUsersCount: state.myUsers.totalUsersCount,
    currentPage: state.myUsers.currentPage,
    isFetching: state.myUsers.isFetching,
    followingInProgres: state.myProfile.followingInProgres
  }
};


export default compose(
  WithAuthRedirect,
  connect(mapStateToProps, { follow, getUsers, unfollow, setCurrentPage, toggleFollowingProgres })
)(UsersApiComp)

