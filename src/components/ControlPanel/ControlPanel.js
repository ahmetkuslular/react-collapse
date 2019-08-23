import React from 'react';
import { CollapseIcon, ExpandIcon, VectorIcon } from '../Icons';
import styled from 'styled-components';

function ControlPanel() {
  return (
    <Header>
      <Button>
        <ExpandIcon />
        <Label>Expand All</Label>
      </Button>
      <Button>
        <CollapseIcon />
        <Label>Collapse All</Label>
      </Button>
      <Button>
        <VectorIcon />
        <Label>Tree</Label>
      </Button>
    </Header>
  );
}

const Button = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid;
  border-color: #e5e5e5;
  border-radius: 5px;
  padding: 5px 20px 5px 20px;
  margin-right: 10px;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 2px 3px -1px #ddd;
  }
`;

const Header = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  cursor: pointer;
`;

const Label = styled.div`
  color: #000;
  font-size: 12px;
  padding-left: 10px;
`;

export default ControlPanel;
