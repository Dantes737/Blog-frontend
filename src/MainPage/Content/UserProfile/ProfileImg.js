import React, { useEffect, useState } from 'react';

function ProfileImg(props) {
    let [editMode, setEditMode] = useState(false);
    let [imgSrc, setImg] = useState(props.userImg);

    useEffect(() => {
        setImg(props.userImg);
    }, [props.userImg])

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateAvatar({
            imgSrc: imgSrc,
            userId: props.userId
        });
    };
    const onImageChange = (e) => {
        setImg(e.currentTarget.value)
    };
    return (
        <div>
            {!editMode &&
                <div>
                    <button onClick={activateEditMode}>Change avatar</button>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onImageChange} value={imgSrc} autoFocus={true} />
                    <button onClick={deactivateEditMode}>Change</button>
                </div>
            }
        </div>
    )
};

export default ProfileImg;