import styled from 'styled-components';
import { Container } from '@mui/material';

import backgroundCheck from 'utils/backgroundCheck';

type HomeProps = {
  time: string;
};

export const Wrapper = styled(Container)<HomeProps>`
  && {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
    max-width: inherit;
    background: linear-gradient(${({ time }) => backgroundCheck(time)}) center center no-repeat;
    background-size: cover;
    padding-bottom: 40px;
  }
`;
