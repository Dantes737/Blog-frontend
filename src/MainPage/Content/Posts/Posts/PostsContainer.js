import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getPostsFromDB } from '../../../../redux/posts-reducer.js'
import { getCommentsFromDB } from '../../../../redux/coments-reducer'
import Posts from './Posts.js';

///////////////////////////
class PostsContainer extends React.Component {

  componentDidMount() {
      this.props.getPostsFromDB();
      this.props.getCommentsFromDB();
  };

  render() {
      return (
          <Posts {...this.props} />
      )
  };
};

const mapStateToProps = (state) => {
  return {
    myPosts: state.myPosts.posts,
    myComents: state.myComents.coments

  }
}; 


  export default compose(
    connect(mapStateToProps, {getCommentsFromDB,getPostsFromDB })
  )(PostsContainer)