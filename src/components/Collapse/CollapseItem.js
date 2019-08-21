import React, { Component } from 'react';
import { VelocityTransitionGroup } from 'velocity-react';
import { uid } from 'react-uid';
import styled from 'styled-components';

import HeaderIcon from 'components/HeaderIcon';
import { TrashIcon } from 'components/Icons';

class CollapseItem extends Component {
  static defaultProps = {
    openColor: '#f50',
    closeColor: '#b5b5b5',
  };

  state = {
    open: false,
  };

  toggleExpanded = () => {
    this.setState(state => ({
      ...state,
      open: !state.open,
    }));
  };

  render() {
    const { open } = this.state;
    const {
      headerStyle,
      label,
      labelStyle,
      icon,
      openColor,
      closeColor,
      item,
      useAnimation,
      children,
      closeChildren,
      deleteItem,
    } = this.props;

    const color = open ? openColor : closeColor;
    return (
      <Container style={headerStyle}>
        <Header style={headerStyle}>
          <HeaderContent onClick={this.toggleExpanded}>
            <HeaderIcon open={open} useAnimation={useAnimation} icon={icon} color={color} />
            <Label style={labelStyle}>{label}</Label>
          </HeaderContent>
          <ActionButtonGroup>
            <IconWrapper onClick={() => deleteItem(item.ID)}>
              <TrashIcon />
            </IconWrapper>
          </ActionButtonGroup>
        </Header>
        <VelocityTransitionGroup
          component="div"
          enter={{
            animation: 'slideDown',
            duration: 500,
            style: { height: '' },
          }}
          leave={{ animation: 'slideUp', duration: this.state.duration }}
        >
          {open && <Content>{children}</Content>}
        </VelocityTransitionGroup>
      </Container>
    );
  }
}

const Container = styled.li`
  flex: 1;
  margin: 1rem 0;
  background-color: #fff;
  align-items: center;
  padding: 1rem;
  margin: 1rem 0;
  border: 0.5px solid;
  border-color: #e5e5e5;
  border-radius: 5px;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 2px 3px -1px #ddd;
  }
`;

const Header = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
`;

const HeaderContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Content = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgb(181, 181, 181, 0.2);
`;

const Label = styled.div`
  color: #000;
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

export default CollapseItem;
