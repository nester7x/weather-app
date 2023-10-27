import styled from 'styled-components';
import { Container } from '@mui/material';

export const MainInfo = styled.div`
  flex: 2;
`;

export const WrapperInner = styled(Container)`
  && {
    display: flex;
    align-items: flex-end;
    height: 100%;
  }
`;

export const Temperature = styled.span`
  font-size: 85px;
  font-weight: 700;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50%;
  flex: 2;
`;

export const CityName = styled.p`
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  color: #f1f1f1;
`;

export const CountryName = styled.span`
  font-size: 20px;
  line-height: 26px;
  color: #f1f1f1;
  margin: 0 0 10px;
`;

export const Time = styled.span``;

export const WeatherType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WeatherImg = styled.img`
  width: 70px;
  height: 70px;
`;

export const WeatherName = styled.span``;
