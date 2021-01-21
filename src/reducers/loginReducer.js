export const loginReducer = (state = false, { payload, type }) => {
  switch (type) {
    case "LOGIN":
      return !state;
    case "LOGOUT":
      return !state;
    default:
      return state;
  }
};
