import React, { FC } from 'react';

import * as S from './styles';

type InfoProps = {
  tempC?: number;
  cityName?: string;
  country?: string;
  time?: string;
  icon?: string;
  weatherType?: string;
};

const Info: FC<InfoProps> = ({ tempC, cityName, country, time, icon, weatherType }) => {
  return (
    <S.MainInfo>
      <S.WrapperInner>
        <S.Temperature>{tempC && <>{tempC}&deg;</>}</S.Temperature>
        <S.Info>
          <S.CityName>{cityName}</S.CityName>
          <S.CountryName>{country}</S.CountryName>
          <S.Time>{time || ''}</S.Time>
        </S.Info>
        <S.WeatherType>
          {icon && <S.WeatherImg src={icon} alt='' />}
          <S.WeatherName>{weatherType || ''}</S.WeatherName>
        </S.WeatherType>
      </S.WrapperInner>
    </S.MainInfo>
  );
};

export default Info;
