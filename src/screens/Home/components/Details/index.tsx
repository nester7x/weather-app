import React, { FC } from 'react';

import * as S from './styles';

type DetailsProps = {
  feelsLike?: number;
  pressure?: number;
  visibilityKM?: number;
  windKPH?: number;
  windDirection?: string;
};

const Details: FC<DetailsProps> = ({
  feelsLike,
  windKPH,
  windDirection,
  pressure,
  visibilityKM,
}) => {
  const items = [
    {
      name: 'Feels like',
      value: feelsLike ? <>{feelsLike}&deg;</> : 'No data...',
    },
    {
      name: 'Wind',
      value: windKPH ? <>{windKPH} km/h</> : 'No data...',
    },
    {
      name: 'Wind direction',
      value: windDirection ? windDirection : 'No data...',
    },
    {
      name: 'Pressure',
      value: pressure ? <>{pressure} mb</> : 'No data...',
    },
    {
      name: 'Visibility',
      value: visibilityKM ? <>{visibilityKM} km</> : 'No data...',
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
