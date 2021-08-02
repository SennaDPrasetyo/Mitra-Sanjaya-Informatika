import { SET_LOCATION, SET_DOCTOR, SET_ONE } from "./actionTypes";

export function setLocation(input) {
  return {
    type: SET_LOCATION,
    payload: input,
  };
}

export function setDoctor(input) {
  return {
    type: SET_DOCTOR,
    payload: input,
  };
}

export function setOne(input) {
  return {
    type: SET_ONE,
    payload: input,
  };
}

export function fetchLocation() {
  return (dispatch) => {
    fetch("http://localhost:3000/location", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        dispatch(setLocation(result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function fetchDoctor(input) {
  return (dispatch) => {
    fetch(`http://localhost:3000/doctors?_page=${input}&_limit=10`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        dispatch(setDoctor(result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function fetchOne(id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/doctors/${id}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        dispatch(setOne(result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
