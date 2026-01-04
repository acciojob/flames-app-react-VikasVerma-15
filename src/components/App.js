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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  calculateRelationship = () => {
    const { name1, name2 } = this.state;

    if (!name1 || !name2) {
      this.setState({ result: "Please Enter valid input" });
      return;
    }

    let arr1 = name1.split("");
    let arr2 = name2.split("");

    // Remove common characters (case-sensitive)
    for (let i = 0; i < arr1.length; i++) {
      let index = arr2.indexOf(arr1[i]);
      if (index !== -1) {
        arr1[i] = "";
        arr2[index] = "";
      }
    }

    const count = arr1.join("").length + arr2.join("").length;
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
        {/* Do not remove the main div */}

        <input
          type="text"
          data-testid="input1"
          name="name1"
          value={this.state.name1}
          onChange={this.handleChange}
          placeholder="Enter first name"
        />

        <input
          type="text"
          data-testid="input2"
          name="name2"
          value={this.state.name2}
          onChange={this.handleChange}
          placeholder="Enter second name"
        />

        <button
          data-testid="calculate_relationship"
          name="calculate_relationship"
          onClick={this.calculateRelationship}
        >
          Calculate Relationship Future
        </button>

        <button
          data-testid="clear"
          name="clear"
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
