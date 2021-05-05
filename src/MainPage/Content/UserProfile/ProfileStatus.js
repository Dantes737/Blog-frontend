import React, { useEffect, useState } from 'react';

function ProfileStatus(props) {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus({
            status: status,
            userId: props.userId
        });
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };
    return (
        <div>
            {!editMode &&
                <div>Status:
                    <span style={{ cursor: "pointer", color: "white" }} onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deactivateEditMode} />
                </div>
            }
        </div>
    )
};

export default ProfileStatus;