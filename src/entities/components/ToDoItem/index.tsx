import React from 'react';
import { Item, Wrapper } from './styled';
import { iItem } from '../../../domain/iItem';

const ListItem = (props: iItem) => {
  return (
    <Wrapper>
      <Item>{props.title} - {props.message}</Item>
    </Wrapper>
  );
}

export default ListItem;
