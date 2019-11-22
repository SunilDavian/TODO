import { FETCH_TODO_SUCCESS, TODO_ADD, TODO_DELETE, TODO_UPDATE } from './type';

const initialState = {
    TODO: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TODO_SUCCESS:
            return Object.assign({}, state, {
                TODO: action.payload
            })
        case TODO_ADD:
            return Object.assign({}, state, {
                TODO: [
                    ...state.TODO,
                    action.payload
                ]
            })
        case TODO_UPDATE:
            const newTableData = [
                ...state.TODO
            ]
            const index = newTableData.indexOf(action.payload.oldData);
            newTableData[index] = action.payload.newData;

            return Object.assign({}, state, {
                TODO: newTableData
            })
        case TODO_DELETE:
            const TableData = [
                ...state.TODO
            ]
            const index1 = TableData.indexOf(action.payload.oldData);
            TableData.splice(index1, 1);

            console.log("TableData>> in Redcsert>>>>>>>>>", TableData)

            return Object.assign({}, state, {
                TODO: TableData
            })
        default: return initialState;
    }
}


