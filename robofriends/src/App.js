// import React from 'react';


import {robots} from './robots';
import React, {useState} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';



function App() {
    const searchfield = useState();
    const robotsStatic = useState(robots);

   const onSearchChange = (event) => {
       searchfield[1]({'searchfield[1]':event.target.value})
       const filteredRobots = robotsStatic[0].filter(robots => {
           return robots.name.toLowerCase().includes(searchfield[0].toLowerCase());
        })
        console.log(filteredRobots);
   }
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox  searchChange={onSearchChange}/>
                <CardList robots = {robotsStatic[0]} />
            </div>
            
        );
    }
    


export default App;