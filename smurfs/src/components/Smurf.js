import React from 'react'

const Smurf = props => {
    return (
        <div className='smurf'>
            <h2>{props.smurf.name}</h2>
            <h3>Age: {props.smurf.age}</h3>
            <h4>Height: {props.smurf.height}</h4> 
            <div className='modify'>
                <button>Update Smurf</button>
                <button onClick={(e) => props.deleteSmurf(e, props.smurf.id)}>Delete Smurf</button>
            </div>
        </div>
    )
}

export default Smurf