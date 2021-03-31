import { connect } from 'react-redux';
import { follow, toggleFollowingProgres, toggleIsFetching, setUsersTotalCount, setUsers, setCurrentPage, unfollow } from '../../redux/users-reducer'
import React from 'react';
import UsersPage from './UsersPage.js';
import { usersAPI } from '../../api/api.js'

class UsersApiComp extends React.Component {
  //   let a=  `http://localhost:5050/users/list?page=3&limit=3`

  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then((resData) => {
        // console.log('! BackEnd-Data !');
        // приходить обєкт з трьома внутрішніми обєктами
        //previous=>попередній список користувачів
        //results=>даний список користувачів
        //next=>наступний список
        // console.log(resData.totalCount);
        this.props.toggleIsFetching(false);
        this.props.setUsers(resData.results)
        this.props.setUsersTotalCount(resData.totalCount)

      })

  };
  onPageChanged = (clickedPage) => {
    this.props.setCurrentPage(clickedPage);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(clickedPage, this.props.pageSize)
      .then((resData) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(resData.results)
      });
  };


  render() {
    return <UsersPage
      pageSize={this.props.pageSize}
      totalUsersCount={this.props.totalUsersCount}
      currentPage={this.props.currentPage}
      users={this.props.users}
      onPageChanged={this.onPageChanged}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      isFetching={this.props.isFetching}
      toggleFollowingProgres={this.props.toggleFollowingProgres}
      followingInProgres={this.props.followingInProgres}
    />
  }
}




const mapStateToProps = (state) => {
  return {
    users: state.myUsers.users,
    pageSize: state.myUsers.pageSize,
    totalUsersCount: state.myUsers.totalUsersCount,
    currentPage: state.myUsers.currentPage,
    isFetching: state.myUsers.isFetching,
    followingInProgres:state.myUsers.followingInProgres
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
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleFollowingProgres
  }
)(UsersApiComp);


export default UPanelContainer;
