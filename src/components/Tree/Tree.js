import React from 'react';
import styled from 'styled-components';
import TreeNode from './TreeNode';
import { createTree } from '../../helpers';

function Tree({ data }) {
  const tree = createTree(data);
  return (
    <Container>
      <Listing>
        {tree.map(node => (
          <TreeNode key={node.ID} node={node}/>
        ))}
      </Listing>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  width: 100%;
`;

const Listing = styled.ul`
  list-style-type: none;
`;

export default Tree;
