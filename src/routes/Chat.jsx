// src/routes/Chat.jsx
import React, { useState, useEffect } from 'react';
import ChatBox from '../components/ChatBox';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // 模拟从API获取聊天记录
  useEffect(() => {
    const fetchData = async () => {
      const mockData = [
        { id: 1, sender: 'Alice', content: 'Hi there!' },
        { id: 2, sender: 'Bob', content: 'Hello!' },
        // ...更多聊天记录
      ];
      setMessages(mockData);
    };
    fetchData();
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    // 这里通常会有API调用来发送新消息
    const newMsg = { id: messages.length + 1, sender: 'You', content: newMessage };
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div className="chat-page">
      <h1>Chat with Alice</h1>
      <div className="chat-box">
        {messages.map((message) => (
          <ChatBox key={message.id} message={message} />
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
