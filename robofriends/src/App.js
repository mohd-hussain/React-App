import React, { Component } from 'react';

import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';



class App extends Component(){
    constructor(){
        super()
        this.state = {
            robots : robots,
            searchfield : ''
        }
    } 

    onSearchChange(event){
        console.log(event);
    }

    render(){
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange ={this.onSearchChange} />
                <CardList robots={this.state.robots} />
            </div>
            
        );
    }
    
}

export default App;