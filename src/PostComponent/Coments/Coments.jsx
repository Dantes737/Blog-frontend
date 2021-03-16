import React from 'react';
import UserComent from "./UserComent/UserComent";
import { addComentActionCreator } from "../../redux/coments-reducer";



function Coments(props) {

    let usersComents = props.coments.map(c => <UserComent nick={c.nick} text={c.text} key={props.id}/>)

    let comentText = React.createRef();
    let addCom = () => {
        let textInp = comentText.current.value;
        props.dispatch(addComentActionCreator(textInp))
        comentText.current.value = ''
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