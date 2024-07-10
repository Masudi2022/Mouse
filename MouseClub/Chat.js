import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);
    const navigate = useNavigate();

    // Get the username from local storage
    const username = localStorage.getItem('username');

    // Fetch messages from the backend
    const fetchMessages = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/comment/');
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    // Send message to the backend
    const sendMessage = async (e) => {
        e.preventDefault();
        if (input.trim()) {
            try {
                const newMessage = { name: username, body: input }; // Adjusted payload
                const response = await axios.post('http://127.0.0.1:8000/api/comment/', newMessage);
                setMessages([...messages, response.data]);
                setInput('');
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    // Logout user
    const handleLogout = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/api/logout/', {}, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            // Clear local storage
            localStorage.removeItem('username');
            localStorage.removeItem('userId');
            // Redirect to /community
            navigate('/community');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    useEffect(() => {
        // Check if user is authenticated
        const isAuthenticated = localStorage.getItem('username');
        if (!isAuthenticated) {
            navigate('/community/login'); // Redirect to login page if not authenticated
        } else {
            fetchMessages();
        }
    }, []);

    useEffect(() => {
        // Scroll to the bottom every time messages change
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='chat'>
                    <div className="chat-container">
            <div className="header">
                <h2>Hi, {username}!</h2>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </div>
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">{msg.body}</div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <form className="message-form" onSubmit={sendMessage}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message here..."
                    className="message-input" // Added class for styling input
                />
                <button type="submit" className="send-button">Send</button> {/* Added class for styling button */}
            </form>
        </div>
        </div>

    );
};

export default Chat;
