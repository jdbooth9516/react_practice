import React from 'react'

export default function SuperheroTable(props) {



    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Primary Ability</th>
                    <th>Secondar Ability</th>
                </tr>
                </thead>
                <tbody>
                {props.heroList.map((hero,index) => (
                    <tr data-index={index}>
                        <td>{hero.superheroId}</td>
                        <td>{hero.name}</td>
                        <td>{hero.primaryAbility}</td>
                        <td>{hero.secondarAbility}</td>
                    </tr>
                ))}
               </tbody>
            </table>
        </div>
    )
}
