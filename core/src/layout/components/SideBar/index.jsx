import React from 'react';

import './styles.scss';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="tab tab-block">
          <li className="tab-item active">
            <a href="#">Api</a>
          </li>
          <li className="tab-item">
            <a href="#">Schema</a>
          </li>
        </ul>
      </div>
    );
  }
}
