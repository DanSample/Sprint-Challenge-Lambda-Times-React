import React from 'react';
import { HeaderDiv, Span, H1 } from '../components/Styles/HeaderStylePackage';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderDiv className="header">
      <Span date className="date">
        SMARCH 32, 2018
      </Span>
      <H1>Lambda Times</H1>
      <Span temp className="temp">
        98°
      </Span>
    </HeaderDiv>
  );
};

export default Header;
