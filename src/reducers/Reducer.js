const Reducer = (state, action) => {
  const { darkMode } = action;
  switch (action.type) {
    case 'ACTION_DARKMODE_TOGGLE':
      return {
        ...state,
        darkMode,
      };
    default:
      return state;
  }
};


export default Reducer;
