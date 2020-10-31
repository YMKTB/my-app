import logo from './logo.svg';
import './App.css';
import React from 'react';
import GoalList from './Component/GoalList'

const App = () => {
    return(
        <div className="course-goals">
            <h2 >second app</h2>
            <GoalList/>
        </div>
        // return React.createElement('h1', {title: 'its works'}, 'hi first app!')
    );
};


export default App;
