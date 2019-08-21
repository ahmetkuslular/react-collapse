import React, { Component } from 'react';
import styled from 'styled-components';

import Collapse from 'components/Collapse';

import { createTree } from 'helpers';
import { dataset } from 'feeds';
import './App.css';
import HeaderIcon from '../HeaderIcon';
import { CollapseIcon, ExpandIcon, TrashIcon } from '../Icons';

class App extends Component {
  state = {
    data: createTree(dataset),
  };

  deleteItem = id => {
    const { data } = this.state;
    const replaceData = this.removeFromTree(data, id);
    this.setState({
      data: replaceData,
    });
  };

  removeFromTree = (data = [], id) => {
    const index = data.findIndex(item => item.ID === id);
    if (index === -1) {
      data.map(item => this.removeFromTree(item.children, id));
    }
    data.splice(index, 1);
    return data;
  };

  render() {
    const { data } = this.state;
    return (
      <Container>
        <AppTitle>React Expand Collapse Example</AppTitle>
        <Header>
          <Button>
            <ExpandIcon />
            <Label>Expand All</Label>
          </Button>
          <Button>
            <CollapseIcon />
            <Label>Collapse All</Label>
          </Button>
        </Header>
        <Collapse data={data} deleteItem={this.deleteItem} />
      </Container>
    );
  }
}

const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  align-items: center;
  margin: 0 auto;
  font-size: 1.6rem;
`;

const AppTitle = styled.h2`
  color: #b5b5b5;
`;

const ControlPanel = styled.div`
  background-color: #f50;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid;
  border-color: #e5e5e5;
  border-radius: 5px;
  padding: 5px 20px 5px 20px;
  margin-right: 10px;
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

const ActionButtonGroup = styled.div``;

export default App;
