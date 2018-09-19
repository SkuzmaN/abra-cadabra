import React, { Component } from 'react';
import Greetings from './Greetings';

export default class Tooltip extends Component {
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
          <Greetings isVisable={isVisable} name="Tooltip" />
          <button
            type="button"
            onMouseEnter={this.show}
            onMouseLeave={this.hide}
          >
            hover on
          </button>
        </div>
      );
    }
}
