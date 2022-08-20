import React, {useState} from 'react';

const UseState = () => {
    /* let a = 1;*/
    let [a, setA] = useState(1)

    const onClickHan = () => {
        setA(++a);
    }
    const onClickHan1 = () => {
        setA(0);
    }
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHan}>Number</button>
            <button onClick={onClickHan1}>0</button>
        </div>
    );
};

export default UseState;