// src/App.js
import React from 'react';
import './App.css';
import Auth from './components/tempAuth';
import ChatRoom from './components/tempChatRoom';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Multi-User Chat</h1>
      </header>
      <section>
        {user ? <ChatRoom /> : <Auth />}
      </section>
    </div>
  );
}

export default App;
