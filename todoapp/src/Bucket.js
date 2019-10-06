import React from 'react';
import './Bucket.css';
import Avatar from '@material-ui/core/Avatar';
import {Image as ImageIcon, Delete} from '@material-ui/icons';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import BucketForm from './BucketForm';
import Modal from '@material-ui/core/Modal';


export default class Bucket extends React.Component {

    constructor() {
        super();
        this.state = {
            openModal: false
        }
    }

    render() {
        const {openModal} = this.state;
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

        const style = {
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            position: 'fixed',
        };


        const listItem = bucketList.map((bucket, index) => (<div onClick={() => {
            this.props.history.push("/bucket-details")
        }} className={'listStyle'}>
            <div style={{display: "flex", alignItems: 'center'}}>
                <Avatar>
                    <ImageIcon/>
                </Avatar>
                2019-09-01
            </div>
            <div style={{fontWeight: 'bold', color: "darkgrey"}}>
                {bucket}
            </div>
            <div>
                <Delete/>
            </div>
        </div>));

        return (
            <>
                <div style={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                }}>{listItem}</div>
                <Fab style={style} onClick={() => this.setState({openModal: true})} color="primary" aria-label="add">
                    <AddIcon/>
                </Fab>
                <Modal
                    open={openModal}
                    onClose={() => this.setState({openModal: false})}
                >
                    <BucketForm/>
                </Modal>
            </>);
    }

}