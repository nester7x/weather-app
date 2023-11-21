import React, { FC } from 'react';

import formatDate from 'utils/formatDate';
import { weatherDataProps } from 'types/weatherTypes';

import * as S from './styles';

type InfoProps = {
  weatherData: weatherDataProps | null;
};

const Info: FC<InfoProps> = ({ weatherData }) => {
  return (
    <S.MainInfo>
      <S.WrapperInner>
        <S.Temperature>
          {weatherData?.current?.temp_c && <>{weatherData?.current?.temp_c}&deg;</>}
        </S.Temperature>
        <S.Info>
          <S.CityName>{weatherData?.location?.name}</S.CityName>
          <S.CountryName>{weatherData?.location?.country}</S.CountryName>
          <S.Time>{formatDate(weatherData?.location?.localtime)}</S.Time>
        </S.Info>
        <S.WeatherType>
          {weatherData?.current?.condition?.icon && (
            <S.WeatherImg src={weatherData?.current?.condition?.icon} alt='' />
          )}
          <S.WeatherName>{weatherData?.current?.condition?.text || ''}</S.WeatherName>
        </S.WeatherType>
      </S.WrapperInner>
    </S.MainInfo>
  );
};

export default Info;
