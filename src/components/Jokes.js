import React, { Component } from "react";

const Joke = ({ joke: { setup, punchline } }) => (
  <p style={{ margin: 20 }}>
    {setup} <em>{punchline}</em>
  </p>
);

class Jokes extends Component {
  state = { joke: {}, jokes: [], firstJoke: false };
  componentDidMount = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(response =>
        this.setState({
          joke: response,
          firstJoke: true
        })
      )
      .catch(error => alert(error.message));
  };

  getJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then(response => response.json())
      .then(response =>
        this.setState({
          jokes: response
        })
      )
      .catch(error => alert(error.message));
  };

  render() {
    return (
      <div>
        <h5>Joke of the day</h5>
        <Joke joke={this.state.joke} />

        {this.state.firstJoke && (
          <div>
            <h5>Want more jokes?</h5>
            <button onClick={this.getJokes}>Just click this!</button>
          </div>
        )}

        {this.state.jokes.map((joke, index) => (
          <Joke key={index} joke={joke} />
        ))}
      </div>
    );
  }
}

export default Jokes;
