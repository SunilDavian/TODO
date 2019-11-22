import { FETCH_TODO_SUCCESS, TODO_ADD, TODO_DELETE, TODO_UPDATE } from './type';


const TableData = [
  { name: 'Task1', bucket: "IT", status: true },
  { name: 'Task2', bucket: "Sales", status: false },
  { name: 'Task3', bucket: "Marketing", status: true }
]


export const getData = function () {
  return (dispatch) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(TableData);
      }, 300);
    }).then(payload => {
      dispatch({
        type: FETCH_TODO_SUCCESS,
        payload
      })
    })
  }
};

export const addData = function (newData) {
  return (dispatch) => {
    dispatch({
      type: TODO_ADD,
      payload: newData
    })
  }
};

export const updateData = function (newData, oldData) {
  return (dispatch) => {
    dispatch({
      type: TODO_UPDATE,
      payload: { newData, oldData }
    })
  }
};

export const deleteData = function (oldData) {
  return (dispatch) => {
    dispatch({
      type: TODO_DELETE,
      payload: { oldData }
    })
  }
};