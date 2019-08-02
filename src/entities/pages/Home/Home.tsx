import React from 'react';
import loadable from '../../../utils/loadable';

const ListContainer = loadable(() => import ('../../containers/ToDoListContainer/ToDoListContainer'))


const Home: React.FC = () => {
  return <ListContainer />
}

export default Home;