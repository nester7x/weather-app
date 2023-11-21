import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import _ from 'lodash';

import { fetchWeather } from 'redux/actions/fetchWeather';
import { weatherDataProps } from 'types/weatherTypes';
import Preloader from 'components/Preloader';
import Search from 'components/Search';
import Info from './components/Info';
import Details from './components/Details';

import * as S from './styles';

type RootState = {
  WeatherState: {
    weatherData: weatherDataProps;
    isFetching: boolean;
  };
};

const Home: FC = () => {
  const location = useLocation();
  const [weatherData, setWeatherData] = useState<weatherDataProps | null>(null);

  const weatherSelector = useSelector((state: RootState) => state);
  const dispatch = useDispatch() as Dispatch<any>;

  const getWeatherInfo = (city: string) => {
    dispatch(fetchWeather(city));
  };

  useEffect(() => {
    setWeatherData(weatherSelector?.WeatherState?.weatherData);
  }, [weatherSelector.WeatherState]);

  useEffect(() => {
    const city = location.search.split('=')[1];

    if (city) {
      getWeatherInfo(city);
    }
  }, [location.search]);

  if (weatherSelector?.WeatherState?.isFetching)
    return (
      <S.Wrapper time={weatherData?.location?.localtime || ''}>
        <Preloader inscription='LOOKING OUTSIDE FOR YOU... ONE SEC' />
      </S.Wrapper>
    );

  return (
    <S.Wrapper time={weatherData?.location?.localtime || ''} maxWidth='sm'>
      <Search errorText={weatherData?.error?.message} />
      {!weatherData?.error && !_.isEmpty(weatherData) && (
        <>
          <Info weatherData={weatherData} />
          <Details weatherData={weatherData} />
        </>
      )}
    </S.Wrapper>
  );
};

export default Home;
