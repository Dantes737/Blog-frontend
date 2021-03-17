// import React from 'react';
import { connect } from 'react-redux';
import Filter from './Filter.js';
import { addPostActionCreator } from "../../../../redux/posts-reducer";

// let addPostActionCreator=(textInp)=>{
//   return{ type: "ADD-POST", text: textInp }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    addUserPost: (textInp) => {
      let action=addPostActionCreator(textInp);
      dispatch(action);
    }
  }
};

const FilterContainer = connect(null,mapDispatchToProps)(Filter);


export default FilterContainer;
