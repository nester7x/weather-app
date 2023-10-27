import React, { FC, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { fetchWeather } from 'redux/actions/fetchWeather';
import Preloader from 'components/Preloader';
import Search from 'components/Search';
import Details from './components/Details';
import Info from './components/Info';
import { getURLParams } from 'utils/getURLParams';
import formatDate from 'utils/formatDate';
import { weatherDataProps } from 'types/weatherTypes';

import * as S from './styles';

type RootState = {
  WeatherState?: {
    weatherData: null | undefined;
  };
};

const Home: FC = () => {
  const location = useLocation();
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<weatherDataProps | null>(null);

  const weatherSelector = useSelector((state: RootState) => state);

  const dispatch = useDispatch() as Dispatch<any>;

  const getWeatherInfo = (city: string) => {
    dispatch(fetchWeather(city));
  };

  useEffect(() => {
    if (weatherSelector?.WeatherState?.weatherData != null) {
      setWeatherData(weatherSelector.WeatherState.weatherData);
    }
  }, [weatherSelector.WeatherState]);

  useEffect(() => {
    setCity(location.search.split('=')[1]);
  }, [location.search]);

  useEffect(() => {
    if (city) {
      getWeatherInfo(city);
    }
  }, [city]);

  return (
    <S.Wrapper time={weatherData?.location?.localtime || ''} maxWidth='sm'>
      <Search errorText={weatherData?.error?.message} />
      {!weatherData?.error && weatherData !== null && Object.keys(weatherData).length !== 0 ? (
        <>
          <Info
            tempC={weatherData?.current?.temp_c}
            cityName={weatherData?.location?.name}
            country={weatherData?.location?.country}
            time={formatDate(weatherData?.location?.localtime)}
            icon={weatherData?.current?.condition?.icon}
            weatherType={weatherData?.current?.condition?.text}
          />
          <Details
            feelsLike={weatherData?.current?.feelslike_c}
            pressure={weatherData?.current?.pressure_mb}
            visibilityKM={weatherData?.current?.vis_km}
            windKPH={weatherData?.current?.wind_kph}
            windDirection={weatherData?.current?.wind_dir}
          />
        </>
      ) : (
        <Preloader
          inscription={
            getURLParams(location.search, 'q') && !weatherData?.error
              ? 'LOOKING OUTSIDE FOR YOU... ONE SEC'
              : 'WRITE YOUR REQUEST'
          }
        />
      )}
    </S.Wrapper>
  );
};

export default Home;
