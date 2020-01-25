import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = (props) => {
    return (
        <div className = "container">
        <h4 className="center">About</h4>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum voluptas at sint. 
                Molestias aut nisi facilis expedita eius ducimus nulla numquam laboriosam qui ea repudiandae placeat voluptates repellat, 
                obcaecati voluptatibus!
            </p>
        </div>
    )
}

export default Rainbow(About);