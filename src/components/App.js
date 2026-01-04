import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",
      name2: "",
      result: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  calculateRelationship = () => {
    const { name1, name2 } = this.state;

    if (name1 === "" || name2 === "") {
      this.setState({ result: "Please Enter valid input" });
      return;
    }

    let a = name1.split("");
    let b = name2.split("");

    for (let i = 0; i < a.length; i++) {
      let index = b.indexOf(a[i]);
      if (index !== -1) {
        a[i] = "";
        b[index] = "";
      }
    }

    const count = a.join("").length + b.join("").length;
    const mod = count % 6;

    const flames = {
      1: "Friends",
      2: "Love",
      3: "Affection",
      4: "Marriage",
      5: "Enemy",
      0: "Siblings"
    };

    this.setState({ result: flames[mod] });
  };

  clearAll = () => {
    this.setState({
      name1: "",
      name2: "",
      result: ""
    });
  };

  render() {
    return (
      <div id="main">
        <input
          type="text"
          name="name1"
          data-testid="input1"
          value={this.state.name1}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="name2"
          data-testid="input2"
          value={this.state.name2}
          onChange={this.handleChange}
        />

        <button
          name="calculate_relationship"
          data-testid="calculate_relationship"
          onClick={this.calculateRelationship}
        >
          Calculate Relationship Future
        </button>

        <button
          name="clear"
          data-testid="clear"
          onClick={this.clearAll}
        >
          Clear
        </button>

        <h3 data-testid="answer">{this.state.result}</h3>
      </div>
    );
  }
}

export default App;

