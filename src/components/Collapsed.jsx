import React, { Component } from 'react';
import Greetings from './Greetings';

import abra from '../abra.png';

export default class Collapsed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisable: false,
    };
  }

    toggle = () => {
      const { isVisable } = this.state;
      const newState = !isVisable;
      this.setState({ isVisable: newState });
    }

    show = () => this.setState({ isVisable: true });

    hide = () => this.setState({ isVisable: false });


    render() {
      const { isVisable } = this.state;
      return (
        <div>
          <Greetings name="Collapsed" isVisable={isVisable} />
          <header><button type="button" onClick={this.toggle}>Collapse section header. Click to expand</button></header>
          {isVisable && (
          <article>
            <img src={abra} alt="logo" />
            <button type="button" onClick={this.hide}>Close</button>
          </article>
          )
          }
        </div>
      );
    }
}
