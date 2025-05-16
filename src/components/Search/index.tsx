import React, { FC, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import useDebounce from 'hooks/useDebounce';

import * as S from './styles';
import getURLParams from '../../utils/getURLParams';

type SearchProps = {
  errorText?: string;
  isLoading?: boolean;
};

const Search: FC<SearchProps> = ({ errorText, isLoading }) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    decodeURIComponent(getURLParams(location.search, 'q')).replace(/\+/g, ' '),
  );
  const debouncedSearchTerm = useDebounce(searchValue, 1000);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  useEffect(() => {
    setSearchParams((prev) => ({ ...prev, q: debouncedSearchTerm }));
  }, [debouncedSearchTerm]);

  return (
    <S.SearchInput
      isLoading={isLoading}
      name='search'
      errorText={errorText}
      value={searchValue}
      onChange={handleInputChange}
      placeholder='Search...'
      type='text'
    />
  );
};

export default Search;
