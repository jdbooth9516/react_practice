import React, { Component } from "react";
import PlayerViewer from "./PlayerViewer/PlayerViewer";
import List from "./List/List";
import AlertUser from "./AlertUser/AlertUser";
import SuperheroTable from "./SuperheroTable/SuperheroTable";
import SuperheroCreateForm from "./SuperheroCreateForm/SuperheroCreateForm";

class App extends Component {
  constructor(props) {
    super(props);

    // exercise 1
    // this.state = {
    //   firstName: "Reggie",
    //   lastName: "White",
    // };

    // EXERCISE 2
    //   this.state = {
    //     names: ["Mike", "Nevin", "Aaron", "Tory", "Kelly"],
    //   };
    // }

    //  EXERCISE 3
    this.state = {
      superheroes: [
        {
          superheroId: 1,
          name: "Batman",
          primaryAbility: "Wealthy",
          secondarAbility: "Rich",
        },
        {
          superheroId: 2,
          name: "Superman",
          primaryAbility: "Super strength",
          secondarAbility: "Fly",
        },
        {
          superheroId: 3,
          name: "Spiderman",
          primaryAbility: "Spider senses",
          secondarAbility: "Shoots web",
        },
      ],
    };
  }

  createNewHero = (heros) => {
    this.setState({
      superheroes: heros,
    });
  };

  alertUser() {
    alert("devCodeCamp");
  }

  render() {
    return (
      <div className="container-fluid">
        <PlayerViewer
          playerFirst={this.state.firstName}
          playerLast={this.state.lastName}
        ></PlayerViewer>
        <List list={this.state.names} />
        <AlertUser alertUser={this.alertUser} />
        <SuperheroTable heroList={this.state.superheroes}></SuperheroTable>
        <SuperheroCreateForm
          createNewHero={this.createNewHero}
          heros={this.state.superheroes}
        ></SuperheroCreateForm>
      </div>
    );
  }
}
export default App;
