import React from 'react'

const Person = (props) => {
    const { id, image, name, age } = props;
    return (
        <article className='person'>
            <img src={image} alt="photo" />
            <div>
                <h4>{name}</h4>
                <p>{age} years</p>
            </div>
        </article>
    );
};

export default Person