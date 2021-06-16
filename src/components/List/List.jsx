import React from "react";

export default function List(props) {
  //look into a for each here
  const array = props.list;
  const names = [];

  for (let i in array) {
      names.push(<li key={array[i]}>{array[i]}</li>);
  }

  return (
    <div className="row">
      <ul className="row">
        {names}
      </ul>
    </div>
  );
}
