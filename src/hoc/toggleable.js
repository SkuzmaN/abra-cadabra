import React, { Component } from 'react';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function toggleable(WrappedComponent) {
  class Toggleable extends Component {
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
          <WrappedComponent
            isVisable={isVisable}
            toggle={this.toggle}
            show={this.show}
            hide={this.hide}
            {...this.props}
          />
        );
      }
  }
  Toggleable.displayName = `Toggleable(${getDisplayName(WrappedComponent)})`;
  return Toggleable;
}

export default toggleable;
