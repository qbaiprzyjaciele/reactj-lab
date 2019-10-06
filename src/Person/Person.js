import React from 'react';
import './Person.css';


const person = (props) => {

    return (
        <div> 
            <p onClick={props.click} > a person I   am {props.name} and im {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;