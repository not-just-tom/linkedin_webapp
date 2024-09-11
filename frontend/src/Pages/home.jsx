import "./home.css"
import React, { useState } from 'react'


export function Home() {      
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Send the user input to the backend API
        const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: userInput
        })
        });
        

        const data = await response.json();
        // Update the messages state with the chatbot's response
        setMessages([...messages, { sender: 'Phil', text: data }]);

        // Clear the user input field
        setUserInput('');
  };

    return(
        <div>
            <h2>Hello, I am Phil.</h2> 
            <p>I am a simple ChatBot Tom coded to talk more about their qualifications and experiences! You can ask me more about how I was created, or about Tom's professional experiences if you like.</p>
        {/* Chat history */}
        {messages.map((message, index) => (
          <p key={index}>{message.sender}: {message.text}</p>
        ))}
  
        {/* User input form */}
        <form onSubmit={handleSubmit}>
          <input type="text" id="userInput" value={userInput} placeholder='Type here to chat!' onChange={(e) => setUserInput(e.target.value)} />
        </form>
      </div>
    );
  }