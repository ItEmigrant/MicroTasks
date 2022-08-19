import React from 'react';
import ButtonOn from "../Components/ButtonOn";

const UnButton = () => {

    const Button11U = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button12U = (subscriber: string) => {
        console.log(subscriber)
    }

    const ButtonIMBS = () => {
        console.log("I am stupid button!!!")
    }
    return (
        <div>
            {/*<button> MyYouTubeChanel- 11</button>
            <button> MyYouTubeChanel-22</button>*/}
            <ButtonOn name={'MyYouTubeChanel-11'} callBack={() => Button11U("I am Bogdan", 35)}/>
            <ButtonOn name={'MyYouTubeChanel-12'} callBack={() => Button12U("I am Jack")}/>
            <ButtonOn name={'IMSB'} callBack={ButtonIMBS}/>

        </div>
    );
};

export default UnButton;