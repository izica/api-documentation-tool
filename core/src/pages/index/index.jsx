import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

@observer
class IndexPage extends React.Component {
    render = () => (
        <div>
            IndexPage
            <Link to="/api/auth">Api</Link>
        </div>
    )
}

export default IndexPage;
