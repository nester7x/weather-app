import React, { FC } from 'react';

import * as S from './styles';

type InputProps = {
  name: string;
  type: string;
  inputProps?: object;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errorText?: string;
  isLoading?: boolean;
  loadingStyles?: React.CSSProperties;
  inputStyles?: React.CSSProperties;
};

const Input: FC<InputProps> = ({
  name,
  onChange,
  value,
  type,
  errorText,
  isLoading,
  loadingStyles,
  placeholder,
  inputStyles,
  ...rest
}) => (
  <S.Label>
    <S.LoadingSpinner isLoading={isLoading} style={loadingStyles} />
    <S.InputStyled
      {...rest}
      style={inputStyles}
      name={name}
      inputProps={{ isLoading: isLoading }}
      disabled={isLoading}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
    {errorText && <S.Error>&#9888; {errorText}</S.Error>}
  </S.Label>
);

export default Input;
