import React, { useState, useEffect } from 'react';
import { getChatMessages, sendMessage } from '../api';  // Import from the centralized API file

const Chat = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const fetchedMessages = await getChatMessages(chatId);
        setMessages(fetchedMessages);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMessages();
  }, [chatId]);

  const handleSendMessage = async () => {
    try {
      await sendMessage(chatId, newMessage);
      setMessages([...messages, { content: newMessage, user: 'You' }]);
      setNewMessage('');
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="chat-container">
      <h1>Chat</h1>
      {error && <p className="error">{error}</p>}
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.user}:</strong> {message.content}
          </div>
        ))}
      </div>
      <div className="send-message">
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
