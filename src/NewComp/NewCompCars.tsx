import React from 'react';

type NewCompType = {
    cars: carsType[]
}
type carsType = {
    manufacturer: string,
    model: string
}

const NewCompCars = (props: NewCompType) => {
    return (
        <table>
            <tr>
                <th>Number</th>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            {props.cars.map((objectFromCarsArray, index) => {
                return (

                    <tr>
                        <td>{index + 1}</td>
                        <td>{objectFromCarsArray.manufacturer} </td>
                        <td>{objectFromCarsArray.model} </td>

                    </tr>
                )

            })}
        </table>)
};

export default NewCompCars;