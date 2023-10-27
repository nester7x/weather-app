const weatherInfo = (
  state = {
    weatherData: {},
  },
  action: { type: string; payload: object },
) => {
  if (action.type === 'FETCH_WEATHER') {
    state = { ...state, weatherData: action.payload };
  }
  return state;
};

export default weatherInfo;
