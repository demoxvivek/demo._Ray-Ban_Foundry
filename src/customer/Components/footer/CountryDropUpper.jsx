import React from 'react';
import styled from 'styled-components';

const CountryListContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Responsive grid */

  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CountryItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px;
`;

const CountryFlag = styled.img`
  width: 24px;
  height: 16px;
  margin-right: 10px;
`;

const countries = [
  { name: '中国 (简体中文)', flag: 'https://flagcdn.com/w320/cn.png' },
  { name: 'China Hongkong', flag: 'https://flagcdn.com/w320/hk.png' },
  { name: '中国香港', flag: 'https://flagcdn.com/w320/hk.png' },
  { name: 'India', flag: 'https://flagcdn.com/w320/in.png' },
  { name: 'Indonesia', flag: 'https://flagcdn.com/w320/id.png' },
  { name: 'Israel', flag: 'https://flagcdn.com/w320/il.png' },
  { name: '日本', flag: 'https://flagcdn.com/w320/jp.png' },
  { name: 'Korea', flag: 'https://flagcdn.com/w320/kr.png' },
  { name: 'Malaysia', flag: 'https://flagcdn.com/w320/my.png' },
  { name: 'Pakistan', flag: 'https://flagcdn.com/w320/pk.png' },
  { name: 'Russia', flag: 'https://flagcdn.com/w320/ru.png' },
  { name: 'Singapore', flag: 'https://flagcdn.com/w320/sg.png' },
  { name: 'China Taiwan', flag: 'https://flagcdn.com/w320/tw.png' },
  { name: 'Thailand', flag: 'https://flagcdn.com/w320/th.png' },
  { name: 'Türkiye', flag: 'https://flagcdn.com/w320/tr.png' },
  { name: 'Vietnam', flag: 'https://flagcdn.com/w320/vn.png' },
];

const CountryList = ({ show }) => {
  return (
    <div style={{ display: `${show ? 'block' : 'none'}` }}>
      <CountryListContainer>
        {countries.map(country => (
          <CountryItem key={country.name}>
            <CountryFlag src={country.flag} alt={country.name} />
            <span>{country.name}</span>
          </CountryItem>
        ))}
      </CountryListContainer>
    </div>
  );
};

export default CountryList;
