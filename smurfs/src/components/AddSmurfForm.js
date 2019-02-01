import React from 'react'
import { connect } from 'react-redux'

import { addSmurf } from '../actions'

class AddSmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

    handleChanges = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addSmurf(this.state)
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <input
                    type='text' 
                    required 
                    name='name' 
                    value={this.state.name} 
                    onChange={this.handleChanges}
                    placeholder='name'
                />
                <input 
                    type='number'
                    required 
                    name='age' 
                    value={this.state.age} 
                    onChange={this.handleChanges}
                    placeholder='age'
                />
                <input 
                    type='text'
                    required 
                    name='height' 
                    value={this.state.height} 
                    onChange={this.handleChanges}
                    placeholder='height'
                />
                <button type='submit'>Add Smurf</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    addingFriend : state.addingFriend
})

export default connect(mapStateToProps, { addSmurf })(AddSmurfForm)