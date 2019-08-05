import React from "react";
import List from "../../components/ToDoList/index";
import { useSelector, useDispatch } from "react-redux";
import { makeSelectData } from "../../../store/to-do-list-container/selectors";
import { Button } from "../../components/Button/Button";
import { getData, eraseData } from '../../../store/to-do-list-container/actions';
import { FormattedMessage } from "react-intl";

const ListContainer = () => {
  const data: any = useSelector(makeSelectData());
  const dispatch = useDispatch()
  const loadData = () => {dispatch(getData())}
  const deleteData = () => {dispatch(eraseData())}

  return (
    <React.Fragment>
      <List data={data} />
      <Button color='green' label={<FormattedMessage id='button.load.label'/>} func={() => loadData()}/>
      <Button color='red' label={<FormattedMessage id='button.erase.label'/>} func={() => deleteData()}/>
    </React.Fragment>
  );
};

export default ListContainer;
