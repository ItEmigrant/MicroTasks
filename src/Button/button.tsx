import React from 'react';


const Button = () => {
    /*const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
        console.log("Hello Im Bogdan!")
    }
    const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
        console.log("Hello Im Jack!")
    }*/
    const onClickHandler = (name: string) => {
        console.log(name)
    }

    return (
        <div>
            {/*<button onClick={(event) => {
                console.log("Hello!")
            }}>MyYouTubeChanel-1
            </button>*/}
            <button onClick={() => onClickHandler('Bogdan')}> MyYouTubeChanel-1</button>
            <button onClick={() => onClickHandler('Jack')}> MyYouTubeChanel-2</button>

        </div>
    );
};

export default Button;