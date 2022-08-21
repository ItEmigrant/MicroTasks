import React, {useState} from 'react';

import NComponent, {moneysType} from "./NComponent";

export type FilterType = 'All' | 'RUBLE' | 'Dollars'

const Filter = () => {
    const [money] = useState<moneysType[]>([
        {banknote: 'Dollars', value: 100, number: ' a1234567890'},
        {banknote: 'Dollars', value: 50, number: ' z1234567890'},
        {banknote: 'RUBLE', value: 100, number: ' w1234567890'},
        {banknote: 'Dollars', value: 100, number: ' e1234567890'},
        {banknote: 'Dollars', value: 50, number: ' c1234567890'},
        {banknote: 'RUBLE', value: 100, number: ' r1234567890'},
        {banknote: 'Dollars', value: 50, number: ' x1234567890'},
        {banknote: 'RUBLE', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money;

    if (filter === "Dollars") {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'Dollars');
    }

    if (filter === "RUBLE") {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'RUBLE');
    }

    const onClickFilterHand = (nameButton: FilterType) => {

        setFilter(nameButton)

    }
    return (
        <>
            <NComponent FMoney={currentMoney} callback={onClickFilterHand}/>
            {/* <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
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
                <button onClick={() => onClickFilterHand("All")}>All</button>
                <button onClick={() => onClickFilterHand("RUBLE")}>Ruble</button>
                <button onClick={() => onClickFilterHand("Dollars")}>Dollars</button>
            </div>*/}
        </>
    )

}

export default Filter;