import React from "react";
import List from "../../components/ToDoList/index";
import { useSelector, useDispatch } from "react-redux";
import { makeSelectData } from "../../../store/to-do-list-container/selectors";
import { Button } from "../../components/Button/Button";
import { getData, eraseData } from '../../../store/to-do-list-container/actions';

const ListContainer = () => {
  const data: any = useSelector(makeSelectData());
  const dispatch = useDispatch()
  const loadData = () => {dispatch(getData())}
  const deleteData = () => {dispatch(eraseData())}

  return (
    <React.Fragment>
      <List data={data} />
      <Button color='green' label='LOAD' func={() => loadData()}/>
      <Button color='red' label='ERASE' func={() => deleteData()}/>
    </React.Fragment>
  );
};

export default ListContainer;
