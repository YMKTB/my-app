import React from 'react';

import './NewGoal.css';

const NewGaol = props => {
    let userText = '';
    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id : Math.random().toString(),
            //text: 'its new goal'
            text: userText
        };
        props.onAddGoal(newGoal);

    };

    const textChangeHandler = event => {
        userText = event.target.value;
    }

    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" onChange={textChangeHandler}/>
        <button type="submit">Add Goal</button>
    </form>

    );
};


export default NewGaol;
