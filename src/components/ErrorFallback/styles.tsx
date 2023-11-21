import styled from 'styled-components';
import { Button } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  text-align: center;
  padding: 20px;
  border: 1px solid #e74c3c;
  border-radius: 5px;
  background-color: #f8d7da;
  color: #721c24;
  max-width: 500px;
`;

export const Message = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const Details = styled.p`
  margin-top: 10px;
  font-size: 16px;
`;

export const RetryBtn = styled(Button)`
  && {
    margin-top: 20px;
    padding: 10px 15px;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
  }
`;
