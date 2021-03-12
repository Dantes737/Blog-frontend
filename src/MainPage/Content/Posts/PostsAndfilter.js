import React from 'react';
import Filter from './Filter/Filter'
import Posts from './Posts/Posts';
import './PostsAndfilter.css';


function BandP(props) {
  return (
    <div className="allCont">
<Filter/>
<Posts myPosts={props.posts}/>
    </div>
  );
}

export default BandP;
