import React from 'react';
import './Filter.css';

// let addPostActionCreator=(textInp)=>{
//   return{ type: "ADD-POST", text: textInp }
// }


function Filter(props) {
  let newPostEl = React.createRef();

  let addMyPost = function () {
    let textInp = newPostEl.current.value;
    props.addUserPost(textInp)
    newPostEl.current.value = ''
  };

  //=========================================
  let changeTextArea = () => {
    let text = newPostEl.current.value;
    console.log(text);
  };
  //=============================================
  return (
    <div className="filt">
      <button>Newest</button>
      <button>Older</button>
      <button>All</button>
      <textarea onChange={changeTextArea} ref={newPostEl} />
      <button onClick={addMyPost} className="addBtn">Add post</button>

    </div>
  );
}

export default Filter;
