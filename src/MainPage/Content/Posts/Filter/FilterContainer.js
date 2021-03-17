import { connect } from 'react-redux';
import Filter from './Filter.js';
import { addPostActionCreator } from "../../../../redux/posts-reducer";


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
