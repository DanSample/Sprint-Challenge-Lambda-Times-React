import styled, { css } from 'styled-components';

const PopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Span = styled.span`
  cursor: pointer;
  margin-right: 5%;

  ${props =>
    props.left &&
    css`
      cursor: pointer;
      margin-right: 25%;
      font-weight: bold;
    `}

  ${props =>
    props.right &&
    css`
      cursor: pointer;
    `}

    ${props =>
      props.lastChild &&
      css`
        margin-right: 0;
      `}
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const ContainerCenter = styled.div`
  &:hover {
    text-decoration: underline;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

export {
  PopBar,
  Container,
  Span,
  ContainerLeft,
  ContainerRight,
  ContainerCenter
};
