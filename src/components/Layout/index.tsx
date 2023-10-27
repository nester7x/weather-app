import React, { FC, ReactNode } from 'react';

import * as S from './styles';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Main>{children}</S.Main>
    </S.Wrapper>
  );
};

export default Layout;
