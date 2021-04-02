import { connect } from 'react-redux';
import { getUsers, follow, toggleFollowingProgres, setCurrentPage, unfollow } from '../../redux/users-reducer'
import React from 'react';
import UsersPage from './UsersPage.js';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect.js';

class UsersApiComp extends React.Component {
  //   let a=  `http://localhost:5050/users/list?page=3&limit=3`

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  };

  onPageChanged = (clickedPage) => {
    this.props.getUsers(clickedPage, this.props.pageSize);
  };


  render() {
    return <UsersPage
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
    />
  }
}

let AuthRedirectComponent =WithAuthRedirect(UsersApiComp) ;

const mapStateToProps = (state) => {
  return {
    users: state.myUsers.users,
    pageSize: state.myUsers.pageSize,
    totalUsersCount: state.myUsers.totalUsersCount,
    currentPage: state.myUsers.currentPage,
    isFetching: state.myUsers.isFetching,
    followingInProgres: state.myUsers.followingInProgres
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userID) => {
//       dispatch(followAC(userID))
//     },
//     unfollow: (userID) => {
//       dispatch(unfollowAC(userID))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumb) => {
//       dispatch(setCurrentPageAC(pageNumb))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     },
//   }
// };

const UPanelContainer = connect(mapStateToProps,
  {
    follow, getUsers,
    unfollow,
    setCurrentPage,
    toggleFollowingProgres
  }
)(AuthRedirectComponent);


export default UPanelContainer;
