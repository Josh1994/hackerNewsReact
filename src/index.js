import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/Header';
import Content from './components/Content';
import TodoList from './components/TodoList';


const text = 'Really Basic Start to REACt';

ReactDOM.render (
    <div>
        <TodoList/>
    </div>,
    document.getElementById('app')
);