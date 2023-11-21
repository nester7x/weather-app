import { combineReducers } from 'redux';

import weatherInfo from './weatherReducer';

const reducers = combineReducers({
  WeatherState: weatherInfo,
});

export default reducers;
