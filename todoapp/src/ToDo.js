import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getData, addData, deleteData, updateData } from './store/todo/actions';
import MaterialTable from 'material-table';


const ToDo = () => {
    const { TODO } = useSelector(store => (store.todo)); //this hook gives us redux store state
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, [])

    function handleChangeChk() {

    }

    return (
        <div>
            <MaterialTable
                columns={[
                    { title: 'Name', field: 'name' },
                    { title: 'Bucket', field: 'bucket' },
                    {
                        field: 'status',
                        title: 'Status',
                        render: rowData => {
                            let status;
                            try {
                                status = JSON.parse(rowData.status)
                            } catch (err) { }
                            return (<input type="checkbox" defaultChecked={status} onChange={handleChangeChk} />)
                        },
                        editComponent: props => (
                            <input type="checkbox" defaultChecked={props.value} onChange={e => props.onChange(e.target.value)} />
                        )
                    }
                ]}
                data={TODO}
                title="TODO"
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve) => {
                            dispatch(addData(newData));
                            resolve()
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            dispatch(updateData(newData, oldData));
                            resolve()
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve) => {
                            dispatch(deleteData(oldData));
                            resolve()
                        }),
                }}

            />
        </div>
    )
}

export default ToDo;