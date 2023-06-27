import React, {Component} from 'react';
import 'tachyons';
// import { robots } from '../../data/robots';
import CardList from '../../components/CardList';
import SearchBox from '../../components/SearchBox';
import './styles.css';

class MainScreen extends Component {
    constructor() {
        super()
        this.state={
            robots:[],
            searchField:''
        }
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {})
    }

    onSearchChange = (event) => {
        this.setState({searchField:event.target.value});
    }

    render(){
        const filteredRobot = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        if(this.state.robots.length === 0){
            return (
                <div className='tc'>
                    <h1 className="f1">No Data</h1>
                </div>
            );
        }else{
            return (
                <div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobot}/>
                </div>
            );
        }
        
    }
    
}

export default MainScreen;