import React, { Component } from "react";

class Band extends Component {

  onClickHandler = () => {
    this.props.deleteBand(this.props.id)
  };

  render() {
    return (
      <div>
        <li>{this.props.name}</li>
        {/* {console.log(this.props)} */}
        <button onClick={this.onClickHandler}>
          Remove
        </button>
      </div>
    );
  };

};

export default Band;