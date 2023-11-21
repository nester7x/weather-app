import React, { FC } from 'react';

import * as S from './styles';

type Error = {
  message: string;
};

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const ErrorFallback: FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Message>Something went wrong:</S.Message>
        <S.Details>{error?.message}</S.Details>
        <S.RetryBtn onClick={resetErrorBoundary}>Try again</S.RetryBtn>
      </S.Content>
    </S.Wrapper>
  );
};

export default ErrorFallback;
