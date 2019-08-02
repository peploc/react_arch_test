import React from 'react';
import Ul from './Ul';
import Wrapper from './Wrapper';
import ListItem from '../ToDoItem/index';
import { iItem } from '../../../domain/iItem';

function List(props: iItem[] | null) {
  let content;

  if (props) {
    content = props.map((item: iItem) => (
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