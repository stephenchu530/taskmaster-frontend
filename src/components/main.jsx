import React from 'react';

import TaskList from './tasklist.jsx';

class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <TaskList />
      </div>
    )
  }
}

export default Main;
