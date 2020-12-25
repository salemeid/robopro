import React, {Component}from 'react';
import CardList from '../components/card-list';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
// import { robots } from './robots';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            SearchBox: ''
        }
    }
    componentDidMount() {
    
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => {
            return response.json();
        })
        .then( users => {
            this.setState({ robots: users });
        })
        
    }
    onSearchChange = (event) => {
        this.setState({ SearchBox: event.target.value }) 
    }

    render(){
        const filteredRobo = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.SearchBox.toLowerCase())
        })

        if (this.state.robots === 0) {
            <h1>Loading .....</h1>
        } else {
            return (
                <div className='tc'>
                    <h1>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobo}/>
                    </Scroll>
                </div>
            );
        }
        
    }  
    
}


export default App;