/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './src/layout';

ReactDOM.render(
    <Layout />,
    document.getElementById('app'),
);

module.hot.accept();
