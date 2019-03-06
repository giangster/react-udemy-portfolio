import React, { Component } from 'react';

const Joke = ({ joke }) => {
    const { setup, punchline } = joke;
    return <p>{setup} <em>{punchline}</em></p>;
}

class Jokes extends Component {
    state = { joke: {}, jokes: [] };
    componentDidMount = () => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(response => this.setState({
                joke: response
            }))
    }

    getJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(response => this.setState({
                jokes: response
            }));
    }

    render() {
        return (
            <div>
                <h5>Joke of the day</h5>
                <Joke joke={this.state.joke} />
                <button onClick={this.getJokes}>More jokes!</button>
                {this.state.jokes.map((joke, index) => (<Joke key={index} joke={joke} />))}
            </div>
        )
    }

}

export default Jokes;