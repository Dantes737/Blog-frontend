import React from 'react';
import FilterContainer from './Filter/FilterContainer'
import Posts from './Posts/Posts';
import './PostsAndfilter.css';


function BandP(props) {
  return (
    <div className="allCont">
      <FilterContainer/>
      <Posts
        dispatch={props.dispatch}
        myComents={props.coments}
        myPosts={props.posts} />
    </div>
  );
}

export default BandP;
