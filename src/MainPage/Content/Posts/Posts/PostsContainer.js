import { connect } from 'react-redux';
import Posts from './Posts.js';


const mapStateToProps = (state) => {
  return {
    myPosts: state.myPosts,
    myComents: state.myComents

  }
}; 

const PostsContainer = connect(mapStateToProps, null)(Posts);

 
export default PostsContainer;
