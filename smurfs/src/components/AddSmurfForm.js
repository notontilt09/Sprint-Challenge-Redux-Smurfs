import React from 'react'
import { connect } from 'react-redux'

import { addSmurf } from '../actions'

const emptySmurf = {
    name: '',
    age: '',
    height: ''
}

class AddSmurfForm extends React.Component {
    state = {
        newSmurf: emptySmurf,
        updatingSmurf: this.props.updatingSmurf
    }

    handleChanges = e => {
        this.setState({
            newSmurf: {
                ...this.state.newSmurf,
                [e.target.name] : e.target.value
            } 
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addSmurf(this.state.newSmurf);
        this.setState({
            newSmurf: emptySmurf
        })
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <input
                    type='text' 
                    required 
                    name='name' 
                    value={this.state.newSmurf.name} 
                    onChange={this.handleChanges}
                    placeholder='name'
                />
                <input 
                    type='number'
                    required 
                    name='age' 
                    value={this.state.newSmurf.age} 
                    onChange={this.handleChanges}
                    placeholder='age'
                />
                <input 
                    type='text'
                    required 
                    name='height' 
                    value={this.state.newSmurf.height} 
                    onChange={this.handleChanges}
                    placeholder='height'
                />
                <button type='submit'>Add Smurf</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    updatingSmurf: state.updatingSmurf
})

export default connect(mapStateToProps, { addSmurf })(AddSmurfForm)