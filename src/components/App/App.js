import React from 'react';
import styled from 'styled-components';
import './App.css';
import Tree from '../Tree';
import { dataset } from '../../feeds';

class App extends React.Component {
  render() {
    return (
      <Container>
        <AppTitle>React Expand Collapse Example</AppTitle>
        <Tree data={dataset} />
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 0 auto;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  padding: 3rem 1rem 1rem;
`;

const AppTitle = styled.h2`
  color: #b5b5b5;
`;

export default App;
