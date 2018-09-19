import React from 'react';
import createReactClass from 'create-react-class';
import Greetings from './Greetings';
import ToggleableMixin from '../mixins/toggleableMixin';

const Tooltip = createReactClass({
  mixins: [ToggleableMixin],
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
  },
});

export default Tooltip;
