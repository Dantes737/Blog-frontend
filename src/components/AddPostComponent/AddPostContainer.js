import { connect } from 'react-redux';
import AddPostPage from './AddPostComp.js';
import { addPostActionCreator } from "../../redux/posts-reducer.js";


const mapDispatchToProps = (dispatch) => {
  return {
    addUserPost: (textInp) => {
      let action=addPostActionCreator(textInp);
      dispatch(action);
    }
  }
};

const AddPostContainer = connect(null,mapDispatchToProps)(AddPostPage);


export default AddPostContainer;
