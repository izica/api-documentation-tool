import React from 'react';
import { Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';

@observer
class IndexPage extends React.Component {
    render = () => <Redirect to="/api">Api</Redirect>;
}

export default IndexPage;
