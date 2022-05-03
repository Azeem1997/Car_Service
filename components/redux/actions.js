export const SETTYPE = "SETTYPE";
export const SETCOMPANYNAME = "SETCOMPANYNAME";
export const SETCARNAME = "SETCARNAME";

export const settype = (type) => (dispatch) => {
  dispatch({
    type: SETTYPE,
    payload: type,
  });
};
export const setcompanyname = (companyname) => (dispatch) => {
  dispatch({
    type: SETCOMPANYNAME,
    payload: companyname,
  });
};
export const setcarname = (carname) => (dispatch) => {
  dispatch({
    type: SETCARNAME,
    payload: carname,
  });
};
