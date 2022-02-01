import { Button } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../common/header/header';
import { useHistory } from 'react-router-dom';
import './Detail.css';

function Detail(props) {
    const id=useParams();
    const history=useHistory();
    const toBack=()=>{
        history.push('/')
    }
    return (<>
        <Header props="BOOK SHOW"/>
        <div className='main'>
            <div className='left'>
                <Button onClick={toBack}>&lt; Back to Home</Button>
            </div>

            <div className='middle'>

            </div>

            <div className='right'>

            </div>
        </div>
    </>);
}

export default Detail;