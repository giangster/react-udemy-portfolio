import React from 'react';

const Button = (props) => {
    return (
        <div>
            <h5>Want more jokes?</h5>
            <button onClick={props.getJokes}>Just click this!</button>
            {props.jokes && props.jokes.map((joke, index) => (<Joke key={index} joke={joke} />))}
        </div>

    )
}

export default Button;

