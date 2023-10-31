import { AnyAction } from 'redux';

import { api } from 'utils/apiUtils';

const requestFiles = () => {
  return { type: 'REQUEST' };
};

const receiveFiles = (city: string) => {
  return { type: 'RECEIVE', payload: city };
};

export function fetchWeather(city: string) {
  return async (dispatch: (action: AnyAction) => AnyAction) => {
    dispatch(requestFiles());

    const data = await api.get(`?q=${city}&key=a6110c4a17b9400cab6161308231603`);
    dispatch(receiveFiles(data));
  };
}
