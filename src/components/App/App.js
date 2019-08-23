import React, { Component } from 'react';
import styled from 'styled-components';

import Collapse from 'components/Collapse';

import { generateTree } from 'helpers';
import { dataset } from 'feeds';
import './App.css';
import CollapseItem from '../Collapse/CollapseItem';

class App extends Component {
  state = {
    data: generateTree(dataset, 'ID', 'parentID'),
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

  renderItem = ({ item }) => {
    return (
      <CollapseItem label={item.Name} id={item.ID} deleteItem={this.deleteItem}>
        {item.Name}
        <Collapse data={item.children} renderItem={this.renderItem} />
      </CollapseItem>
    );
  };

  render() {
    const { data } = this.state;
    return (
      <Container>
        <AppTitle>React Expand Collapse Example</AppTitle>
        <Collapse data={data} renderItem={this.renderItem}/>
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

export default App;
