import React from 'react';
import 'tachyons';
import { robots } from '../../data/robots';
import CardList from '../../components/CardList';

const MainScreen = (props)=>{
    return (
        <div>
            <CardList robots={robots}/>
        </div>
    );
}

export default MainScreen;