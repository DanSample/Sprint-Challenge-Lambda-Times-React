import React from 'react';
import {
  PopBar,
  Container,
  Span,
  ContainerLeft,
  ContainerRight,
  ContainerCenter
} from '../components/Styles/TopBarStylePackage';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <PopBar>
      <Container>
        <ContainerLeft>
          <Span left>TOPICS</Span>
          <Span left>SEARCH</Span>
        </ContainerLeft>
        <ContainerCenter>
          <Span>GENERAL</Span>
          <Span>BROWNBAG</Span>
          <Span>RANDOM</Span>
          <Span>MUSIC</Span>
          <Span lastChild>ANNOUNCEMENTS</Span>
        </ContainerCenter>
        <ContainerRight>
          <Span right>LOG IN</Span>
        </ContainerRight>
      </Container>
    </PopBar>
  );
};

export default TopBar;
