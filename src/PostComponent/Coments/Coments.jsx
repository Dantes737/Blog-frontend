import React from 'react';
import UserComent from "./UserComent/UserComent";



function Coments(props) {

    let usersComents = props.coments.map(c => <UserComent nick={c.nick} text={c.text} key={props.id}/>)

    let comentText = React.createRef();
    let addCom = () => {
        let text = comentText.current.value;
        alert(text)
    };
    return (
        <div className="coments">
            <button onClick={addCom}>Add  coment</button>
            <textarea ref={comentText}></textarea>

            {usersComents}
        </div>
    )
}


export default Coments;