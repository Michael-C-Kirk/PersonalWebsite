import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');

ReactDOM.render(element, document.getElementById('root'));
