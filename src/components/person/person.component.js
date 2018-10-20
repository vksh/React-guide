import React from 'react';

const Person = (props) => {
    return (
        <div className='person'>
            <h5>{props.name}</h5>
            <h6>{props.age}</h6>
            <h6>{props.role}</h6>
        </div>
    )
}

export default Person;