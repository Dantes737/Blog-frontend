import { connect } from 'react-redux';
import UsersPage from './UsersPage.js';
import {followAC,setUsersAC,unfollowAC} from '../../redux/users-reducer'

const mapStateToProps = (state) => {
  return {
    users: state.myUsers.users,
    pageSize:state.myUsers.pageSize,
    totalUsersCount:state.myUsers.totalUsersCount,
    currentPage:state.myUsers.currentPage
  }
};

const mapDispatchToProps=(dispatch)=>{
  return{
    follow:(userID)=>{
      dispatch(followAC(userID))
    },
    unfollow:(userID)=>{
      dispatch(unfollowAC(userID))
    },
    setUsers:(users)=>{
      dispatch(setUsersAC(users))
    }
  }
}

const UPanelContainer = connect(mapStateToProps,mapDispatchToProps)(UsersPage);


export default UPanelContainer;
