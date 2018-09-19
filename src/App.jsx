import React from 'react';
import Modal from './components/Modal';
import Tooltip from './components/Tooltip';
import Collapsed from './components/Collapsed';
import Panel from './components/Panel';
import Toggleable from './components/Toggleable';
import 'bulma/css/bulma.css';

const App = () => (
  <div>
    <Panel>
      <Toggleable render={
        ({ isVisable, toggle }) => <Modal isVisable={isVisable} toggle={toggle} />}
      />
    </Panel>
    <Panel>
      <Toggleable render={
        ({ isVisable, show, hide }) => <Tooltip isVisable={isVisable} show={show} hide={hide} />}
      />
    </Panel>
    <Panel>
      <Toggleable render={
        ({ isVisable, toggle, hide }) => (
          <Collapsed
            isVisable={isVisable}
            toggle={toggle}
            hide={hide}
          />
        )}
      />
    </Panel>
  </div>
);
export default App;
