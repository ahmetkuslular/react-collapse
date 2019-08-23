import React from 'react';
import styled from 'styled-components';
import HeaderIcon from '../HeaderIcon';
import { TrashIcon } from '../Icons';

function Header({ label, labelStyle, headerStyle}) {
  return (
    <Container style={headerStyle}>
      <HeaderContent>
        <HeaderIcon />
        <Label style={labelStyle}>{label}</Label>
      </HeaderContent>
      <ActionButtonGroup>
        <IconWrapper>
          <TrashIcon />
        </IconWrapper>
      </ActionButtonGroup>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  padding: 1rem;
`;

const HeaderContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Label = styled.div`
  color: #000;
`;

const IconWrapper = styled.div`
  height: 25px;
  width: 25px;
  text-align: center;
  justify-content: center;
  border-radius: 50%;
  display: inline-block;
  &:hover {
    border: 0.5px solid;
    background-color: rgb(255, 85, 0, 0.3);
    color: #fff;
  }
`;

const ActionButtonGroup = styled.div`
  justift-content: flex-end;
`;

export default Header;
