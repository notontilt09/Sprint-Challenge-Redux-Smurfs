import React, { Component } from 'react';
import { connect } from 'react-redux'

import SmurfsList from './SmurfsList'
import AddSmurfForm from './AddSmurfForm'
import { clearFlash } from '../actions'

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='title'>Smurfs Redux App</h1>
        {this.props.deleted && <div onClick={this.props.clearFlash} className='delete-flash'>Smurf Deleted!</div>}
        {this.props.added && <div onClick={this.props.clearFlash} className='added-flash'>Smurf Added!</div>}
        {this.props.updated && <div onClick={this.props.clearFlash} className='updated-flash'>Smurf Updated!</div>}
        <div className="page">
          <AddSmurfForm /> 
          <SmurfsList />   
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  deleted: state.deleted,
  added: state.added,
  updated: state.updated
})

export default connect(mapStateToProps, { clearFlash })(App);
