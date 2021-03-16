import React from 'react';
import Filter from './Filter/Filter'
import Posts from './Posts/Posts';
import './PostsAndfilter.css';


function BandP(props) {
  return (
    <div className="allCont">
      <Filter dispatch={props.dispatch} />
      <Posts
        dispatch={props.dispatch}
        myComents={props.coments}
        myPosts={props.posts} />
    </div>
  );
}

export default BandP;
