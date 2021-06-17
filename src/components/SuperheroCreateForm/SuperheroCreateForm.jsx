import React, { Component } from "react";
import App from "../app";

export default class SuperheroCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superheroId: "",
      name: "",
      primaryAbility: "",
      secondarAbility: "",
    };
    this.heros = props.heros;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.heros.push(this.state);
    this.props.createNewHero(this.heros);
  };

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>ID</label>
          <input
            type="number"
            name="superheroId"
            onChange={this.handleChange}
            value={this.state.superheroId}
          />
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label>primaryAbility</label>
          <input
            type="text"
            name="primaryAbility"
            onChange={this.handleChange}
            value={this.state.primaryAbility}
          />
          <label>secondarAbility</label>
          <input
            type="text"
            name="secondarAbility"
            onChange={this.handleChange}
            value={this.state.secondarAbility}
          />
          <button type="submit">Add Hero</button>
        </form>
      </div>
    );
  }
}
