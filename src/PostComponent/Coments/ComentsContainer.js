// import React from 'react';
import { connect } from 'react-redux';
import Coments from './Coments.js';


// const mapDispatchToProps = (dispatch) => {
//   return {
//     addUserComent: (textInp) => {
//       let action=addComentActionCreator(textInp);
//       dispatch(action);
//     }
//   }
// };

const ComentsContainer = connect(null,null)(Coments);


export default ComentsContainer;
