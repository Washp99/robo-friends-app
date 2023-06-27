import React, {Component} from 'react';
import 'tachyons';
// import { robots } from '../../data/robots';
import CardList from '../../components/CardList';
import SearchBox from '../../components/SearchBox';
import './styles.css';
import Scroll from '../../components/Scroll';

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
            .then(users => this.setState({robots:users}))
    }

    onSearchChange = (event) => {
        this.setState({searchField:event.target.value});
    }

    render(){
        const {searchField,robots} = this.state;
        const filteredRobot = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length?
            (
                <div className='tc'>
                    <h1 className="f1">Loading</h1>
                </div>
            ):
            (
                <div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobot}/>
                    </Scroll>
                </div>
            );
        
        
    }
    
}

export default MainScreen;