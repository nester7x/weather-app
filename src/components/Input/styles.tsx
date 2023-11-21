import styled from 'styled-components';
import Input from '@mui/material/Input';

export const Label = styled.label`
  position: relative;
  width: 100%;
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
