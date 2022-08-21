import React from 'react';
import button from "../Button/button";
import { FilterType } from './filter';

type MoneyPropsType = {
    FMoney: moneysType[]
    callback: (nameButton: FilterType) => void

}
export type moneysType = {

    banknote: string
    value: number
    number: string
}


const NComponent = (props:MoneyPropsType) => {
    return (

        <>
            <ul>
                {props.FMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.callback ("All")}>All</button>
                <button onClick={() => props.callback("RUBLE")}>Ruble</button>
                <button onClick={() => props.callback("Dollars")}>Dollars</button>
            </div>
        </>
    );
};

export default NComponent;