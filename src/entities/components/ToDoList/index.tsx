import React from 'react';
import Ul from './Ul';
import Wrapper from './Wrapper';
import ListItem from '../ToDoItem/index';
import { iItem } from '../../../domain/iItem';

const List = (props: any) => {
  let content;

  if (props.data) {
    content = props.data.map((item: iItem) => (
      <ListItem key={`item-${item.id}`} {...item} />
    ));
  } else {
    content = <h3>Nothing to show</h3>;
  }

  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}

export default List;