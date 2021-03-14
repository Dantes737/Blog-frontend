import React from 'react';
import Filter from './Filter/Filter'
import Posts from './Posts/Posts';
import './PostsAndfilter.css';


function BandP(props) {
  return (
    <div className="allCont">
<Filter addPost={props.addPost}/>
<Posts myComents={props.coments} myPosts={props.posts}/>
    </div>
  );
}

export default BandP;
