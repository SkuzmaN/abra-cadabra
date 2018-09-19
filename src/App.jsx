import React from 'react';
import Modal from './components/Modal';
import Tooltip from './components/Tooltip';
import Collapsed from './components/Collapsed';
import Panel from './components/Panel';
import 'bulma/css/bulma.css';

const App = () => (
  <div>
    <Panel>
      <Modal />
    </Panel>
    <Panel>
      <Tooltip />
    </Panel>
    <Panel>
      <Collapsed />
    </Panel>
  </div>
);
export default App;
