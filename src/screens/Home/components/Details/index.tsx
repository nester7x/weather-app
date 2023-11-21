import React, { FC } from 'react';

import { weatherDataProps } from 'types/weatherTypes';

import * as S from './styles';

type DetailsProps = {
  weatherData: weatherDataProps | null;
};

const Details: FC<DetailsProps> = ({ weatherData }) => {
  const items = [
    {
      name: 'Feels like',
      value: weatherData?.current?.feelslike_c ? (
        <>{weatherData?.current?.feelslike_c}&deg;</>
      ) : (
        'No data...'
      ),
    },
    {
      name: 'Wind',
      value: weatherData?.current?.wind_kph ? (
        <>{weatherData?.current?.wind_kph} km/h</>
      ) : (
        'No data...'
      ),
    },
    {
      name: 'Wind direction',
      value: weatherData?.current?.wind_dir ? weatherData?.current?.wind_dir : 'No data...',
    },
    {
      name: 'Pressure',
      value: weatherData?.current?.pressure_mb ? (
        <>{weatherData?.current?.pressure_mb} mb</>
      ) : (
        'No data...'
      ),
    },
    {
      name: 'Visibility',
      value: weatherData?.current?.vis_km ? <>{weatherData?.current?.vis_km} km</> : 'No data...',
    },
  ];

  return (
    <S.Wrapper>
      <S.AdditionalInfo>
        <S.Title>Weather Details</S.Title>
        {items?.map((item, index) => (
          <S.Item key={index}>
            <S.ItemName>{item.name}</S.ItemName>
            <S.ItemValue>{item.value}</S.ItemValue>
          </S.Item>
        ))}
      </S.AdditionalInfo>
    </S.Wrapper>
  );
};

export default Details;
