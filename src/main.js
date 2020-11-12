import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';


const render = (Component) => ReactDom.render(<App />, document.getElementById('root'));

render(hot(App));