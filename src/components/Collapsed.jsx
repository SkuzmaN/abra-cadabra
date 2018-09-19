import React from 'react';
import createReactClass from 'create-react-class';
import Greetings from './Greetings';
import ToggleableMixin from '../mixins/toggleableMixin';

import abra from '../abra.png';

const Collapsed = createReactClass({
  mixins: [ToggleableMixin],
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
  },
});

export default Collapsed;
