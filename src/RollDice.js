import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {

    static defaultProps = {

        faces: ["one", "two", "three", "four", "five", "six"]
    };

    constructor(props) {
        super(props);

        this.state = {
            diceNum1: 'five',
            diceNum2: 'six',
            rolling: false
        };
        this.roll = this.roll.bind(this);

    }
    roll(event) {

        let randNum1 = Math.floor(Math.random() * this.props.faces.length);
        let randNum2 = Math.floor(Math.random() * this.props.faces.length);

        this.setState({
            diceNum1: this.props.faces[randNum1],
            diceNum2: this.props.faces[randNum2],
            rolling: true
        });

        setTimeout(() => { this.setState({ rolling: false }) }, 1000);

    }

    render() {

        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face={this.state.diceNum1} rolling={this.state.rolling} />
                    <Die face={this.state.diceNum2} rolling={this.state.rolling} />
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
                </button>

            </div>
        );

    }

}

export default RollDice;