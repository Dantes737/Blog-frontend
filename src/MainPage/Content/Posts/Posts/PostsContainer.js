import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getPostsFromDB } from '../../../../redux/posts-reducer.js'
import Posts from './Posts.js';

///////////////////////////
class PostsContainer extends React.Component {

  componentDidMount() {
      this.props.getPostsFromDB();
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
    connect(mapStateToProps, { getPostsFromDB })
  )(PostsContainer)