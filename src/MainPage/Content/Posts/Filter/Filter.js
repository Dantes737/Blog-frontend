import React from 'react';
import './Filter.css';


function Filter(props) {
let newPostEl=React.createRef();

  let addMyPost = function () {
    let textInp = newPostEl.current.value;
    props.addPost(textInp)
  }

  return (
    <div className="filt">
      <button>Newest</button>
      <button>Older</button>
      <button>All</button>
      <button onClick={addMyPost} className="addBtn">Add post</button>
      <textarea ref={newPostEl}></textarea>

    </div>
  );
}

export default Filter;
