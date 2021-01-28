import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AddCircleOutline } from '../.';

const App = () => {
  return (
    <div>
      <AddCircleOutline />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
