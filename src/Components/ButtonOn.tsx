import React from 'react';
type ButtonOnPropsType = {
    name:string
    callBack:()=>void
}
const ButtonOn = (props:ButtonOnPropsType) => {
    const onClickHan = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHan}> {props.name }</button>
    );
};

export default ButtonOn;