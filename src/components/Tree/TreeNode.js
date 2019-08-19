import React from 'react';
import styled from 'styled-components';

function TreeNode() {
  return (
    <AppToggle>
      <div>Node</div>
    </AppToggle>
  );
}

const AppToggle = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  margin: 1rem 0;
  border: 0.5px solid;
  border-color: #e5e5e5;
  padding: 1rem;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  transition: background-color 300ms;
`;

export default TreeNode;
