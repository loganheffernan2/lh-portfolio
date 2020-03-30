import React, { Component } from 'react'

export default class Toggle extends Component {

    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render() {
        return (
        <p>
            {this.state.on && this.props.children}
        <span onClick={this.toggle}>?</span>
        </p>
        );
    }
}