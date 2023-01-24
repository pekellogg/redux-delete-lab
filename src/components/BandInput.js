import React, { Component } from "react";

class BandInput extends Component {

  state = {
    name: ""
  };

  handleOnChange = (event) => this.setState({ name: event.target.value });

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <p>Enter a band name: </p>
          <input 
            type="text"
            placeholder="name"
            onChange={this.handleOnChange}
            value={this.state.name}
          />
          <p><input type="submit" /></p>
        </form>
      </div>
    );
  };

};

export default BandInput;