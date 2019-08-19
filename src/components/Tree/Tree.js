import React from 'react';
import styled from "styled-components";
import TreeNode from './TreeNode';

function Tree({ data }) {
  return (
    <Container>
      {data.map(item => (
        <TreeNode />
      ))}
    </Container>
  );
}

const Container = styled.div`
  flex:1;
  width:100%;
`

export default Tree;
