import React from 'react';
import Filter from './Filter/Filter'
import Posts from './Posts/Posts';
import './PostsAndfilter.css';


function BandP() {
  return (
    <div className="allCont">
<Filter/>
<Posts/>
    </div>
  );
}

export default BandP;
