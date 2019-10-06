import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

export default class Header extends Component {

    render() {
        return (
            <div className='header-style'>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div><img style={{maxHeight: "auto", width: '126px', height: '60px', maxWidth: '100%'}}
                              src={'/image/header-logo.png'}/></div>
                    <div style={{marginLeft: "30px"}}>
                        <Link to={'/'}>Bucket</Link>
                    </div>
                    <div style={{marginLeft: "30px"}}>
                        <Link to={'/todo'}>ToDo</Link>
                    </div>
                </div>

            </div>
        )
    }
}