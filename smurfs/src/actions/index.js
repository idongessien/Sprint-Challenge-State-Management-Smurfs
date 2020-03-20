import axios from "axios";

export const fetchState = () => {
  return dispatch => {
    dispatch({ type: "FETCHING_ACTIVITY_START" });
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response);
        dispatch({ type: "FETCHING_DATA_SUCCESS", payload: response.data });
      })
      .catch(error => console.log(error));
  };
};

export const submitSmurf = newSmurf => {
  return dispatch => {
    dispatch({ type:"ADD_SMURF", payload: newSmurf})
  }
}