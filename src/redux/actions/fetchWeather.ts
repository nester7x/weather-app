import { AnyAction } from 'redux';

import { api } from 'utils/apiUtils';

export function fetchWeather(city: string) {
  return async function (dispatch: (action: AnyAction) => AnyAction) {
    const data = await api.get(`?q=${city}&key=a6110c4a17b9400cab6161308231603`);

    dispatch({ type: 'FETCH_WEATHER', payload: data });
  };
}
