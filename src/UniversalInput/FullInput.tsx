import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    call:(title:string) => void
}
export const FullInput = (props:FullInputPropsType) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {

        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
       props.call(title)
       setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+
            </button>
        </div>

    );
};

