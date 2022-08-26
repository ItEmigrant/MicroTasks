import React, {useState} from 'react';
import './App.css';
/*import {FullInput} from "./UniversalInput/FullInput";*/
import {Input} from "./UniversalInput/Input";
import {Button} from "./UniversalInput/Button";

/*import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComp/NewComponent";
import NewCompCars from "./NewComp/NewCompCars";
import Button from "./Button/button";
import UnButton from "./Button/UnButton";
import UseState from "./Components/useState";
import Filter from "./Components/filter";*/


function App() {
    //BILL
    /*const people = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 108}
    ]
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]*/


    //UI:
    /*return (

        {/!* <UnButton/>
            <Button/>
            <Header title={'NEW TITLE'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'}/>
            <NewComponent students={people}/>
            <NewCompCars cars={topCars}/>
            <UseState/>
            <Filter/>*!/}*/
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState('')

    const call = (title: string) => {
        let newMessage = {message: title}
       setMessage([newMessage, ...message])
    }
    const callBackButtonHandler = () => {
        call(title)
        setTitle('')
    }
    return (

        <div className={'App'}>
            {/* <div>
                <input/>
                <button>+</button>
            </div>*/}
            {/*<FullInput call={call}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (

                    <div key={index}>{el.message}</div>


                )
            })}

        </div>
    )
}


export default App;
