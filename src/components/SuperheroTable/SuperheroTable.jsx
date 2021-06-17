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
            {props.heroList.map((hero, index) => (
              <tr data-index={index}>
                <td key={hero.superheroId}>{hero.superheroId}</td>
                <td key={hero.name}>{hero.name}</td>
                <td key={hero.primaryAbility}>{hero.primaryAbility}</td>
                <td key={hero.secondarAbility}>{hero.secondarAbility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
