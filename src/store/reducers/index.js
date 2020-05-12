const initialState = {
  name: '',
};

const rootReducer = (state = initialState, action) => {
  if (action.type === 'SET_NAME') {
    return {
      ...state,
    };
  }
  return { ...state };
};

export default rootReducer;
