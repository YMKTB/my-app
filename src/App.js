import logo from './logo.svg';
import './App.css';
import React from 'react';
import GoalList from './Component/GoalList/GoalList'
import NewGaol from "./Component/NewGoal/NewGoal";
const App = () => {

    const courseGoal = [
        {id: 'cg1', text: 'watch'},
        {id: 'cg2', text: 'apply'},
        {id: 'cg3', text: 'push'},
        {id: 'cg4', text: 'new var.'}
        ];

    return(
        <div className="course-goals">
            <h2 >second app</h2>
            <NewGaol />
            <GoalList goals={courseGoal}/>


        </div>
        // return React.createElement('h1', {title: 'its works'}, 'hi first app!')
    );
};


export default App;
