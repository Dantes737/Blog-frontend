import { connect } from 'react-redux';
import Posts from './Posts.js';


const mapStateToProps = (state) => {
  return {
    myPosts: state.myPosts.posts,
    myComents: state.myComents.coments

  }
}; 

const PostsContainer = connect(mapStateToProps, null)(Posts);

 
export default PostsContainer;
