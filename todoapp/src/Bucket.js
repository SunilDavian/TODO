import React, { useState } from 'react';
import './Bucket.css';
import Avatar from '@material-ui/core/Avatar';
import { Image as ImageIcon, Delete } from '@material-ui/icons';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import BucketForm from './BucketForm';
import Modal from '@material-ui/core/Modal';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};
const bucketList = [
    'Machine',
    'Machine',
    'Machine',
    'Machine',
    'Machine',
    'Machine',
    'Machine',
    'Machine',
    'Machine',
    'Machine',
    'Machine',
    'Machine',
    'Machine',
    'Machine'
];


const Bucket = props => {

    const [openModal, setModal] = useState(false);

    const listItem = bucketList.map((bucket, index) => (<div onClick={() => {
        props.history.push("/bucket-details")
    }} className={'listStyle'}>
        <div style={{ display: 'flex', marginLeft: '15px' }}>
            <Avatar>
                {bucket.charAt(0)}
            </Avatar>
            <div style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold', marginLeft: '20px' }}>
                {bucket}
                <span>2019-09-01</span>
            </div>
        </div>

    </div>));
    return (
        <>
            <div style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
            }}>{listItem}</div>
            <Fab style={style} onClick={() => setModal(true)} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <Modal
                open={openModal}
                onClose={() => setModal(false)}
            >
                <BucketForm />
            </Modal>
        </>);

}

export default Bucket;