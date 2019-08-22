import React, { Component } from 'react';
import styled from 'styled-components';
import { uid } from 'react-uid';

import CollapseItem from './CollapseItem';
import ItemContent from './ItemContent';

class Collapse extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.setState({
      data: this.props.data,
    });
  }

  getCollapseItem = (item, index) => {
    const { deleteItem } = this.props;
    const itemChildren = item.children && this.getChildren(item);
    return (
      <CollapseItem
        key={item.ID || uid(index)}
        item={item}
        label={item.ID + ' ' + item.Name}
        deleteItem={deleteItem}
        open={item.open}
      >
        <ItemContent item={item} />
        {itemChildren}
      </CollapseItem>
    );
  };

  getChildren = node => {
    const children = [];
    if (node.children) {
      node.children.map((childNode, index) => {
        children.push(this.getCollapseItem(childNode, index));
      });
    }
    return children;
  };

  render() {
    const { data } = this.props;
    return (
      <Container>
        <Listing>{data.map((item, index) => this.getCollapseItem(item, index))}</Listing>
      </Container>
    );
  }
}

const Container = styled.div`
  flex: 1;
  width: 100%;
`;

const Listing = styled.div`
  list-style-type: none;
`;

export default Collapse;
