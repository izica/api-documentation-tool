import React from 'react';
import { Link } from 'react-router-dom';

class IndexPage extends React.Component {
  render = () => {
    return (
      <div>
        IndexPage
        <Link to={'/api'}>Api</Link>
      </div>
    );
  }
}

export default IndexPage
