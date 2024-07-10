// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Community = () => {
//     const [messages, setMessages] = useState([]);
//     const [username, setUsername] = useState('');
//     const [content, setContent] = useState('');

//     useEffect(() => {
//         fetchMessages();
//     }, []);

//     const fetchMessages = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/api/chat/messages/');
//             setMessages(response.data);
//         } catch (error) {
//             console.error('Error fetching messages:', error);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:8000/api/chat/messages/', {
//                 username,
//                 content,
//             });
//             setContent('');
//             fetchMessages();
//         } catch (error) {
//             console.error('Error sending message:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Chat</h1>
//             <div>
//                 {messages.map((message) => (
//                     <div key={message.id}>
//                         <strong>{message.username}</strong>: {message.content}
//                     </div>
//                 ))}
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     placeholder="Username"
//                     required
//                 />
//                 <input
//                     type="text"
//                     value={content}
//                     onChange={(e) => setContent(e.target.value)}
//                     placeholder="Message"
//                     required
//                 />
//                 <button type="submit">Send</button>
//             </form>
//         </div>
//     );
// };

// export default Community;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Message = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios.get('http://localhost:8000/api/community/') // URL of your Django REST API endpoint
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the comments', error);
      });
  }, []);

  return (
    <div>
      <h1>Mouse Community</h1>
      <ul>
        {message.map(message => (
          
          <li key={message.id}>{message.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default Message;

