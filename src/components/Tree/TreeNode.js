import React from 'react';
import styled from 'styled-components';

class TreeNode extends React.Component {
  state = {
    visible: true,
  };

  getChildren(node) {
    const children = [];
    if (node.children) {
      node.children.map(childNode => {
        children.push(<TreeNode key={childNode.ID} node={childNode} />);
      });
    }
    return children;
  }

  toggleExpanded = (id, event) => {
    this.setState(state => ({
      ...state,
      visible: !state.visible,
    }));
  };

  render() {
    const { node } = this.props;
    const { visible } = this.state;
    const children = this.getChildren(node);

    const visibleStyle = visible ? { display: 'none' } : { display: '' };

    return (
      <Container key={node.ID}>
        <AppToggle>
          <a onClick={this.toggleExpanded}>{node.Name}</a>
        </AppToggle>
        <ul style={visibleStyle}>{children}</ul>
      </Container>
    );
  }
}

const Container = styled.div`
  flex: 1;
  width: 100%;
  margin: 1rem 0;

`;

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
