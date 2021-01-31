import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AccessibilityOutlineIcon } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AccessibilityOutlineIcon />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
