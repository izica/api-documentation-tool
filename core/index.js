/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './src/layout';

ReactDOM.render(
    <Layout />,
    document.getElementById('app'),
);

if(module){
    if(module.hot){
        module.hot.accept();
    }
}
