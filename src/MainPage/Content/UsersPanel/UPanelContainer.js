import { connect } from 'react-redux';
import UPanel from './UPanel.js';
    

const mapStateToProps = (state) => {
  return {
    users: state.myUsers
  }
};

const UPanelContainer = connect(mapStateToProps,null)(UPanel);


export default UPanelContainer;
