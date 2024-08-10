// src/components/ChatRoom.js
import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy, addDoc } from "firebase/firestore";
import { auth, firestore } from '../firebase';

const ChatRoom = () => {
  const messagesRef = collection(firestore, 'messages');
  const q = query(messagesRef, orderBy('createdAt'));
  const [messages] = useCollectionData(q, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: new Date(),
      uid,
      photoURL
    });

    setFormValue('');
  };

  return (
    <>
      <div>
        {messages && messages.map(msg => <p key={msg.id}>{msg.text}</p>)}
      </div>
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default ChatRoom;
