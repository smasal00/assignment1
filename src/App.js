import React from 'react';
import ProfileContainer from './components/ProfileContainer'

function App() {
  return (
    <div className="ui stackable grid container">
      <div className="five wide column">
        <ProfileContainer/>
      </div>
      <div className="five wide column">
        <ProfileContainer/>
      </div>
      <div className="five wide column">
        <ProfileContainer/>
      </div>
    </div>
  );
}

export default App
