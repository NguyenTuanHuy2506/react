import React, { Component } from 'react';

export default class Comp_ahihi extends Component {
    constructor(props) {
        super();
        this.image = './logo192.png'
      }
    render() {
        return (
            <div>
                <h2>{this.props.linkUrl}</h2>
                <img src={this.props.linkUrl} alt=""/>
            </div>
        )
    }
}