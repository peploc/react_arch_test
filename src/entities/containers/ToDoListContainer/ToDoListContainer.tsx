import List from '../../components/ToDoList/index';
import { useSelector } from 'react-redux';
import { makeSelectData } from '../../../store/to-do-list-container/selectors';


function ListContainer() {
    
    const data: any = useSelector(makeSelectData)
    return List(data)
}

export default ListContainer;