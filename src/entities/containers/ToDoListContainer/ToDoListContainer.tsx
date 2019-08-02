import React from 'react'
import List from '../../components/ToDoList/index';
import { useSelector } from 'react-redux';
import { makeSelectData } from '../../../store/to-do-list-container/selectors';

const ListContainer = () => {
    
    const data: any = useSelector(makeSelectData());
    return <List data={data} />;
    
}

export default ListContainer;
