import React, { Component } from 'react';

const TITLES = [
    'a student',
    'an animal lover',
    'a cook',
    'a cute socks lover',
    'a combination of sarcasm and sweetness'
];

class Title extends Component {
    state = { titleIndex: 0 };


    componentDidMount() {
        console.log('mounted');

        this.animateTitles();

    }

    animateTitles = () => {

        setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex })
        }, 3000);
    }

    render() {
        const title = TITLES[this.state.titleIndex];
        return (
            <p>I am {title}</p>
        )
    }
}

export default Title;