import React from 'react';
import UserComent from "./UserComent/UserComent";
import { addComentActionCreator } from "../../redux/coments-reducer";
import "./Coments.css";


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
            <textarea className="textInp" ref={comentText}></textarea>
            <button
            className="addComBtn"
            onClick={addCom}>Add  coment</button>

            {usersComents}
        </div>
    )
}


export default Coments;