import styled, { keyframes } from 'styled-components';
import Input from '@mui/material/Input';

type LoadingProps = {
  isLoading?: boolean;
};

export const Label = styled.label`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const Spinner = keyframes` 
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div<LoadingProps>`
  display: ${({ isLoading }) => (isLoading ? 'block' : 'none')};
  position: absolute;
  left: 0;
  top: 10px;
  width: 25px;
  height: 25px;
  border: 3px solid #f1f1f1;
  border-top: 3px solid #333333;
  border-radius: 50%;
  animation: ${Spinner} 1.5s linear infinite;
`;

export const InputStyled = styled(Input)`
  && {
    font-family: inherit;
    background-color: transparent;
    border-bottom: 2px solid #f3f4f4;
    padding: 7px 19px 6px;
    width: 100%;
    font-size: 30px;
    line-height: 37px;
    color: #f3f4f4;
    input {
      padding: 0;
    }
    &&.css-q0jhri-MuiInputBase-root-MuiInput-root:before {
      border-bottom: 1px solid transparent !important;
    }
    &&.css-q0jhri-MuiInputBase-root-MuiInput-root:after {
      border-bottom: 1px solid transparent;
    }
    :hover:before {
      border-bottom: 1px solid transparent !important;
    }
  }
`;

export const Error = styled.p`
  font-size: 24px;
  color: #ff0000;
`;
