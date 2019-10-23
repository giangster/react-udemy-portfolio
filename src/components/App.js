import React, { Component } from "react";
import Projects from "./Projects";
import Title from "./Title";
import SocialProfile from "./SocialProfile";
import koi from "../assets/koi.png";

class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };

    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }

  toggleDisplayBio() {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
        <img src={koi} alt="Koi" className="profile" />
        <h1>Hello!</h1>
        <Title />

        <p>My name is Giang Nguyen.</p>
        {this.state.displayBio ? (
          <div>
            <p>
              I'm 25 years old. I'm a student majoring in Business Information
              Technology at Haaga-Helia University of Applied Sciences.
            </p>
            <p>
              As a second year student in IT major, I understand the profound
              impact of this specific aspect to the future of human as well as
              its potential in upcoming years. I'm interested in frontend
              development the most, but I'm also keen on server-side or even
              full-stack as well.
            </p>
            <p>My hobbies include books, travelling, and cuisines.</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfile />
      </div>
    );
  }
}

export default App;
