import React from 'react';

export default class Board extends React.Component {

    render() {
        return (
        <div>
            <h1>{ this.props.title }</h1>
            <ul>
                { this.props.meals.map((meal) => <h3 key={meal.id}>{meal.text}: {meal.amount} </h3>) }
            </ul>
        </div>
        );
    }

}