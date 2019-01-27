import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Content from './components/Content';

const text = 'Really Basic Start to REACt';

ReactDOM.render (
    <div>
        <Header />
        <Content contentTitle={text} />
    </div>,
    document.getElementById('app')
);