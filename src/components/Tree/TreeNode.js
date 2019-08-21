import React from 'react';
import styled from 'styled-components';
import { VelocityComponent, VelocityTransitionGroup } from 'velocity-react';
import PlusIcon from './plus-icon';

class TreeNode extends React.Component {
  state = {
    open: false,
    duration: 500,
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

  toggleExpanded = () => {
    this.setState(state => ({
      ...state,
      open: !state.open,
    }));
  };

  render() {
    const { node } = this.props;
    const { open } = this.state;
    const children = this.getChildren(node);

    return (
      <Container key={node.ID} open={open}>
        <AppToggle>
          <IconWrapper open={open}>
            <VelocityComponent
              animation={{ rotateZ: open ? 45 : 0 }}
              duration={this.state.duration}
            >
              <PlusIcon color={open ? '#f50' : '#000'} />
            </VelocityComponent>
          </IconWrapper>
          <Label onClick={this.toggleExpanded} >{node.Name}</Label>
        </AppToggle>
        {children.length > 0 && (
          <VelocityTransitionGroup
            component="ul"
            enter={{
              animation: 'slideDown',
              duration: this.state.duration,
              style: { height: '' },
            }}
            leave={{ animation: 'slideUp', duration: this.state.duration }}
          >
            {this.state.open ? children : null}
          </VelocityTransitionGroup>
        )}
      </Container>
    );
  }
}

const Label = styled.div`
  font-size: 15px;
`;
const Container = styled.li`
  list-style-type: none;
  margin: 10px 0 10px 10px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -30px;
    border-left: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    width: 30px;
    height: 30px;
  }
  &:after {
    position: absolute;
    content: '';
    top: 20px;
    left: -30px;
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
    width: 30px;
    height: 100%;
  }

  ${props =>
    props.open &&
    `
    li {
          &:after,&:before {
            border-color:  #f50;
          }
        }
  `}
  &:last-child:after {
    display: none;
  }
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

const IconWrapper = styled.div`
  margin-right: 10px;

`;

export default TreeNode;
