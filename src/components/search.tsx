import React from "react";
import { Input } from "antd";

const { Search } = Input;

interface SearchWordProps {
  setSearchWord?: (value: any) => void;
}

const SearchWord: React.FC<SearchWordProps> = ({ setSearchWord }) => {
  const onSearch = (value: any) => {
    setSearchWord!(value);
  };
  return (
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  );
};

export default SearchWord;
