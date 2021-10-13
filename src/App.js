import React, { Component } from "react";

class InputControlado extends Component {
  state = {
    text: "",
    tieneError: false,
    color: "#E8E8E8"
  };
  actualizar = (event) => {
    const text = event.target.value;
    let color = "green";

    if (text.trim() === "") {
      color = "·E8E8E8";
    }

    if (text.trim() === "" && text.trim().length < 5) {
      color = "red";
    }
    this.setState({ text, color });
  };

  render() {
    const style = {
      border: `1px solid ${this.state.color}`,

      padding: "0.3em 0.6em",
      outline: "none"
    };
    return (
      <input
        type="text"
        value={this.state.text}
        onChange={this.actualizar}
        style={style}
      />
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Inputs Controlados </h1>
        <InputControlado />
      </div>
    );
  }
}

export default App;
