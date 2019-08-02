import React from 'react';
import Item from './Item';
import Wrapper from './Wrapper';
import { iItem } from '../../../domain/iItem';

function ListItem(props: iItem) {
  return (
    <Wrapper>
      <Item>{props.title} - {props.message}</Item>
    </Wrapper>
  );
}

export default ListItem;
