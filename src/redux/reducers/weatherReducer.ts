const weatherInfo = (
  state = {
    weatherData: {},
    isFetching: false,
  },
  action: { type: string; payload: object },
) => {
  switch (action.type) {
    case 'RECEIVE': {
      state = { ...state, isFetching: false, weatherData: action.payload };
      break;
    }
    case 'REQUEST': {
      state = { ...state, isFetching: true };
      break;
    }
  }
  return state;
};

export default weatherInfo;
