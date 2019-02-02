import axios from 'axios'

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL'
export const ADD_SMURFS_START = 'ADD_SMURFS_START'
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS'
export const ADD_SMURFS_FAIL = 'ADD_SMURFS_FAIL'
export const DELETE_SMURFS_START = 'DELETE_SMURFS_START'
export const DELETE_SMURFS_SUCCESS = 'DELETE_SMURFS_SUCCESS'
export const DELETE_SMURFS_FAIL = 'DELETE_SMURFS_FAIL'
export const UPDATE_SMURFS_START = 'UPDATE_SMURFS_START'
export const UPDATE_SMURFS_SUCCESS = 'UPDATE_SMURFS_SUCCESS'
export const UPDATE_SMURFS_FAIL = 'UPDATE_SMURFS_FAIL'
export const POPULATE_FORM = 'POPULATE_FORM'
export const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE'


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios.get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: err }))
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURFS_START });
  axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_SMURFS_FAIL, payload: err }))
}

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURFS_START });
  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_SMURFS_FAIL, payload: err }))
}

export const updateSmurf = smurf => dispatch => {
  dispatch({ type: UPDATE_SMURFS_START });
  axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => dispatch({ type: UPDATE_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_SMURFS_FAIL, payload: err }))
}

export const populateForm = smurf => {
  return { type: POPULATE_FORM, payload: smurf }
}

export const handleChange = e => {
  return { type: HANDLE_INPUT_CHANGE, payload: e }
}
