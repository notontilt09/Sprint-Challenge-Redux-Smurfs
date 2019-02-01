/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
  ADD_SMURFS_START,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_FAIL
} from '../actions'
 
 const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: ''
}



/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurf = (state = initialState, action) => {
  console.log(action);
  switch(action.type) {
    default:
      return state
  }
}

export default smurf;
