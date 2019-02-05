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
  ADD_SMURFS_FAIL,
  DELETE_SMURFS_START,
  DELETE_SMURFS_SUCCESS,
  DELETE_SMURFS_FAIL,
  UPDATE_SMURFS_START,
  UPDATE_SMURFS_SUCCESS,
  UPDATE_SMURFS_FAIL,
  POPULATE_FORM,
  HANDLE_INPUT_CHANGE,
  CLEAR_FLASH
} from '../actions'
 
 const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: '',
  name: '',
  age: '',
  height: '',
  updatingId: '',
  deleted: false,
  added: false,
  updated: false
}



/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurf = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      }
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    case ADD_SMURFS_START:
      return {
        ...state,
        addingSmurf: true
      }
    case ADD_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
        name: '',
        age: '',
        height: '',
        added: true,
        deleted: false,
        updated: false
      }
    case ADD_SMURFS_FAIL: 
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
    case DELETE_SMURFS_START:
      return {
        ...state,
        deletingSmurf: true
      }
    case DELETE_SMURFS_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload,
        deleted: true,
        added: false,
        updated: false
      }
    case DELETE_SMURFS_FAIL:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      }
    case UPDATE_SMURFS_START:
      return {
        ...state,
        updatingSmurf: true
      }
    case UPDATE_SMURFS_SUCCESS:
      return {
        ...state,
        updatingSmurf: false,
        smurfs: action.payload,
        name: '',
        age: '',
        height: '',
        updated: true,
        added: false,
        deleted: false
      }
    case UPDATE_SMURFS_FAIL:
      return {
        ...state,
        updatingSmurf: false,
        error: action.payload
      }
    case POPULATE_FORM:
      return {
        ...state,
        name: action.payload.name ,
        age: action.payload.age,
        height: action.payload.height, 
        updatingSmurf: true,
        updatingId: action.payload.id
      }
    case HANDLE_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      };
    case CLEAR_FLASH:
      return {
        ...state,
        deleted: false,
        added: false,
        updated: false
      }
    default:
      return state
  }
}

export default smurf;
