import { SETTYPE, SETCARNAME, SETCOMPANYNAME } from "./actions";

const initialstate = {
  type: "",
  companyname: "",
  carname: "",
};

export const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SETTYPE:
      return { ...state, type: action.payload };
    case SETCOMPANYNAME:
      return { ...state, companyname: action.payload };
    case SETCARNAME:
      return { ...state, carname: action.payload };
    default:
      return initialstate;
  }
};
