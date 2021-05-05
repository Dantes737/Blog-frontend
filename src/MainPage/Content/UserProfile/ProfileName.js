import React, { useEffect, useState } from 'react';

function ProfileName(props) {
    let [editMode, setEditMode] = useState(false);
    let [name, setName] = useState(props.name);

    useEffect(() => {
        setName(props.name);
    }, [props.name])

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateName({
            name: name,
            userId: props.userId
        });
    };
    const onNameChange = (e) => {
        setName(e.currentTarget.value)
    };
    return (
        <div>
            {!editMode &&
                <div>Name:
                    <span style={{ cursor: "pointer", color: "white" }} onDoubleClick={activateEditMode}>{props.name}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onNameChange} value={name} autoFocus={true} onBlur={deactivateEditMode} />
                </div>
            }
        </div>
    )
};

export default ProfileName;