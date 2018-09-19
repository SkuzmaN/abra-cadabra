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
      <Toggleable>
        {({ isVisable, toggle }) => <Modal isVisable={isVisable} toggle={toggle} />}
      </Toggleable>
    </Panel>
    <Panel>
      <Toggleable>
        {({ isVisable, show, hide }) => <Tooltip isVisable={isVisable} show={show} hide={hide} />}
      </Toggleable>
    </Panel>
    <Panel>
      <Toggleable>
        {
        ({ isVisable, toggle, hide }) => (
          <Collapsed
            isVisable={isVisable}
            toggle={toggle}
            hide={hide}
          />
        )}
      </Toggleable>
    </Panel>
  </div>
);
export default App;
