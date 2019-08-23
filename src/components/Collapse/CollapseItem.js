import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { VelocityTransitionGroup } from 'velocity-react';
import styled from 'styled-components';

import HeaderIcon from 'components/HeaderIcon';
import { TrashIcon } from 'components/Icons';

class CollapseItem extends PureComponent {
  handleItemClick = () => {
    const { onItemClick, itemKey } = this.props;
    if (typeof onItemClick === 'function') {
      onItemClick(itemKey);
    }
  };

  render() {
    const {
      headerStyle,
      label,
      labelStyle,
      icon,
      openColor,
      closeColor,
      useAnimation,
      children,
      deleteItem,
      isActive,
      id,
    } = this.props;

    const color = isActive ? openColor : closeColor;

    return (
      <Container style={headerStyle}>
        <Header style={headerStyle}>
          <HeaderContent onClick={this.handleItemClick}>
            <HeaderIcon isActive={isActive} useAnimation={useAnimation} icon={icon} color={color} />
            <Label style={labelStyle}>{label}</Label>
          </HeaderContent>
          <ActionButtonGroup>
            {deleteItem && (
              <IconWrapper onClick={() => deleteItem(id)}>
                <TrashIcon />
              </IconWrapper>
            )}
          </ActionButtonGroup>
        </Header>
        <VelocityTransitionGroup
          component="div"
          enter={{
            animation: 'slideDown',
            duration: 500,
            style: { height: '' },
          }}
          leave={{ animation: 'slideUp', duration: 500 }}
        >
          {isActive && <Content>{children}</Content>}
        </VelocityTransitionGroup>
      </Container>
    );
  }
}

CollapseItem.defaultProps = {
  openColor: '#f50',
  closeColor: '#b5b5b5',
};

CollapseItem.propTypes = {
  openColor: PropTypes.string,
  closeColor: PropTypes.string,
};

const Container = styled.div`
  flex: 1;
  margin: 1rem 0;
  background-color: #f7f7f7;
  align-items: center;
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
  padding: 1rem;
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
  background-color: #fff;
  padding: 1rem;
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

const ActionButtonGroup = styled.div`
  justift-content: flex-end;
`;

export default CollapseItem;
