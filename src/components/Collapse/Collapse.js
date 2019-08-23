import React, { Component, Fragment, Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isFragment } from 'react-is';

function toArray(activeKey) {
  let currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : [];
  }
  return currentActiveKey.map(key => key.toString());
}

class Collapse extends Component {
  constructor(props) {
    super(props);

    const { activeKey, defaultActiveKey } = props;
    let currentActiveKey = defaultActiveKey;
    if ('activeKey' in props) {
      currentActiveKey = activeKey;
    }

    this.state = {
      activeKey: toArray(currentActiveKey),
      data: [],
    };
  }

  onClickItem = key => {
    let activeKey = this.state.activeKey;

    activeKey = [...activeKey];
    const index = activeKey.indexOf(key);
    const isActive = index > -1;
    if (isActive) {
      activeKey.splice(index, 1);
    } else {
      activeKey.push(key);
    }

    this.setActiveKey(activeKey);
  };

  setActiveKey = activeKey => {
    console.log('setActiveKey', activeKey);
    if (!('activeKey' in this.props)) {
      this.setState({ activeKey });
    }
    this.props.onChange(activeKey);
  };

  getNewChild = (child, index) => {
    if (!child) return null;
    const { activeKey } = this.state;
    const key = child.key || String(index);
    let isActive = activeKey.indexOf(key) > -1;

    const props = {
      key,
      itemKey: key,
      isActive,
      onItemClick: this.onClickItem,
      ...child.props,
    };

    return React.cloneElement(child, props);
  };

  getItems = () => {
    const { data, children, renderItem } = this.props;
    const childList = isFragment(children) ? children.props.children : children;

    const newChildren = Children.map(childList, this.getNewChild);

    if (children) {
      if (isFragment(children)) {
        return <Fragment>{newChildren}</Fragment>;
      }
      return newChildren;
    }

    if (data) {
      const mappendData = data.map(item => renderItem({ item }));
      const newDataChildren = Children.map(mappendData, this.getNewChild);
      return <Fragment>{newDataChildren}</Fragment>;
    }
  };

  render() {
    const { className, style } = this.props;
    return (
      <Container className={className} style={style}>
        {this.getItems()}
      </Container>
    );
  }
}

Collapse.propTypes = {
  children: PropTypes.any,
  data: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  activeKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
};

Collapse.defaultProps = {
  onChange() {},
};

const Container = styled.div`
  flex: 1;
  width: 100%;
`;

export default Collapse;
