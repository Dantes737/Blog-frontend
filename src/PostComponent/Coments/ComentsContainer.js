// import React from 'react';
import { connect } from 'react-redux';
import Coments from './Coments.jsx';
import { addComentActionCreator } from "../../redux/coments-reducer";

// let addPostActionCreator=(textInp)=>{
//   return{ type: "ADD-POST", text: textInp }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    addUserComent: (textInp) => {
      let action=addComentActionCreator(textInp);
      dispatch(action);
    }
  }
};

const ComentsContainer = connect(null,mapDispatchToProps)(Coments);


export default ComentsContainer;
