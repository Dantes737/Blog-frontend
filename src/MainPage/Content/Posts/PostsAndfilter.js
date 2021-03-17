import React from 'react';
import FilterContainer from './Filter/FilterContainer'
import PostsContainer from './Posts/PostsContainer';
import './PostsAndfilter.css';


function BandP() {
  return (
    <div className="allCont">
      <FilterContainer/>
      <PostsContainer />
    </div>
  );
}

export default BandP;
