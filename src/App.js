import React, { Component } from 'react';
import Projects from './Projects';
import Title from './Title'
import SocialProfile from './SocialProfile';
import koi from './assets/koi.png';

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
                <img src={koi} alt='Koi' className='profile' />
                <h1>Hello!</h1>
                <Title />
                <p>My name is Giang, but you can call me Koi. And.. I'm a cat.</p>
                {this.state.displayBio ? (<div>
                    <p>I'm 25 years old (but many people tell me I don't look like one.. or <i>behave</i> like one). Currently I'm living in Finland. I'm a student majoring in Business Information Technology at Haaga-Helia University of Applied Sciences. I'm learning React.js, JavaScript, CSS.</p>
                    <p>I think it's safe to say I'm responsible and willing to learn. I'm also a good combination of sweet and sarcastic. And I <b>love</b> cute socks.</p>
                    <p>In my free time I like to cook, read books, watch "lame series" from Netflix (as my sister would call it, but I think they are awesome..) and sleep. Sorry I'm a cat. You know they love sleeping.</p>
                    <button onClick={this.toggleDisplayBio}>Show less</button>
                </div>) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <SocialProfile />
            </div>
        )
    }
}
export default App;