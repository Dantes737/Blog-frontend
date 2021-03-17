import { connect } from 'react-redux';
import SecondBar from './SecondBar.js';
    

const mapStateToProps = (state) => {
  return {
    friends: state.myFriends
  }
};

const SecondBContainer = connect(mapStateToProps,null)(SecondBar);


export default SecondBContainer;
