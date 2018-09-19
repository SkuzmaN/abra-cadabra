import React from 'react';
import createReactClass from 'create-react-class';
import Greetings from './Greetings';
import ToggleableMixin from '../mixins/toggleableMixin';

const Modal = createReactClass({
  mixins: [ToggleableMixin],
  render() {
    const { isVisable } = this.state;
    return (
      <div>
        <Greetings isVisable={isVisable} name="Modal" />
        <button type="button" onClick={this.toggle}>{isVisable ? 'hide' : 'show'}</button>
      </div>
    );
  },
});

export default Modal;
