
/**
 * React renderer.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import the styles here to process them with webpack
import '@public/style.css';
import { Application } from '@/App/Application';


ReactDOM.render(
  <div className='app'>
    <Application />
  </div>,
  document.getElementById('app')
);
