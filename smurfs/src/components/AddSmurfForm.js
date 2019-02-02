import React from 'react'
import { connect } from 'react-redux'

import { addSmurf, updateSmurf, handleChange } from '../actions'

class AddSmurfForm extends React.Component {
    handleChanges = e => {
        this.props.handleChange(e);
    }

    handleSubmit = e => {
        e.preventDefault();
        if (!this.props.updatingSmurf) {
            this.props.addSmurf({
                name: this.props.name,
                age: this.props.age,
                height: this.props.height
            });
        } else {
            this.props.updateSmurf({
                name: this.props.name,
                age: this.props.age,
                height: this.props.height,
                id: this.props.updatingId
            })
        }
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <input
                    type='text' 
                    required 
                    name='name' 
                    value={this.props.name} 
                    onChange={this.handleChanges}
                    placeholder='name'
                />
                <input 
                    type='number'
                    required 
                    name='age' 
                    value={this.props.age} 
                    onChange={this.handleChanges}
                    placeholder='age'
                />
                <input 
                    type='text'
                    required 
                    name='height' 
                    value={this.props.height} 
                    onChange={this.handleChanges}
                    placeholder='height'
                />
                <button type='submit'>{this.props.updatingSmurf ? 'Update Smurf' : 'Add Smurf'}</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    updatingSmurf: state.updatingSmurf,
    name: state.name,
    age: state.age,
    height: state.height,
    updatingId: state.updatingId

})

export default connect(mapStateToProps, { addSmurf, updateSmurf, handleChange })(AddSmurfForm)