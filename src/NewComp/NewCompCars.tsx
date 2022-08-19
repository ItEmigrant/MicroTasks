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
            {props.cars.map((objektFromCarsArray, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{objektFromCarsArray.manufacturer} </td>
                        <td>{objektFromCarsArray.model} </td>

                    </tr>
                )

            })}
        </table>)
};

export default NewCompCars;