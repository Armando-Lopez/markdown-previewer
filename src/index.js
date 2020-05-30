import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownPreviewer from './pages/MarkdownPreviewer';
import './scss/style.css';

ReactDOM.render(
  <React.StrictMode>
    <MarkdownPreviewer />
  </React.StrictMode>,
  document.getElementById('root')
);