import React from 'react';
import styled from 'styled-components';
import { CityIcon, KeyIcon, PhoneIcon, ProfileIcon } from '../Icons';

const contentFields = [
  { label: 'ID', valueKey: 'ID', icon: KeyIcon },
  { label: 'Name', valueKey: 'Name', icon: ProfileIcon },
  { label: 'Phone', valueKey: 'Phone', icon: PhoneIcon },
  { label: 'City', valueKey: 'City', icon: CityIcon },
];

function CollapseItemContent({ item }) {
  return (
    <Container>
      {contentFields.map(({ icon: Icon, label, valueKey }, index) => (
        <Row key={index}>
          <Key>
            <Icon />
            <Label>{label}</Label>
          </Key>
          <Label>{item[valueKey]}</Label>
        </Row>
      ))}
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  width: 100%;
  background-color: rgb(247, 247, 247, 1);
  border-radius: 5px;
  padding: 5px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Key = styled.div`
  display: flex;
  width: 100px;
`;

const Label = styled.div`
  font-size: 12px;
  color: #b5b5b5;
  display: block;
  padding-left: 10px;
`;

export default CollapseItemContent;
