import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';


ReactDom.render(<App />, document.getElementById('root'));
window.onload = () => document.getElementsByName('title')[0].focus();
