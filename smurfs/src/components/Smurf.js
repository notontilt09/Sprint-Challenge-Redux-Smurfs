import React from 'react'

const Smurf = props => {
    return (
        <div className='smurf'>
            <h2>{props.smurf.name}</h2>
            <h3>Age: {props.smurf.age}</h3>
            <h4>Height: {props.smurf.height}</h4> 
        </div>
    )
}

export default Smurf