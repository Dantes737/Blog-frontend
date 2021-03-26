import { connect } from 'react-redux';
import { followAC,toggleIsFetchingAC, setUsersTotalCountAC, setUsersAC, setCurrentPageAC, unfollowAC } from '../../redux/users-reducer'
import * as axios from 'axios';
import React from 'react';
import UsersPage from './UsersPage.js';


class UsersApiComp extends React.Component {
  //   let a=  `http://localhost:5050/users/list?page=3&limit=3`

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`http://localhost:5050/users/list?page=${this.props.currentPage}&limit=${this.props.pageSize}`)
      .then((response) => (response.data))
      .then((resData) => {
        // console.log('! BackEnd-Data !');
        // приходить обєкт з трьома внутрішніми обєктами
        //previous=>попередній список користувачів
        //results=>даний список користувачів
        //next=>наступний список
        // console.log(resData.totalCount);
        this.props.toggleIsFetching(false);
        this.props.setUsers(resData.results)
        this.props.setTotalUsersCount(resData.totalCount)

      })

  };
  onPageChanged = (clickedPage) => {
    this.props.setCurrentPage(clickedPage);
    this.props.toggleIsFetching(true);
    axios.get(`http://localhost:5050/users/list?page=${clickedPage}&limit=${this.props.pageSize}`)
      .then((response) => (response.data))
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
      />
  }
}




const mapStateToProps = (state) => {
  return {
    users: state.myUsers.users,
    pageSize: state.myUsers.pageSize,
    totalUsersCount: state.myUsers.totalUsersCount,
    currentPage: state.myUsers.currentPage,
    isFetching: state.myUsers.isFetching
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID))
    },
    unfollow: (userID) => {
      dispatch(unfollowAC(userID))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumb) => {
      dispatch(setCurrentPageAC(pageNumb))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    },
  }
}

const UPanelContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComp);


export default UPanelContainer;
