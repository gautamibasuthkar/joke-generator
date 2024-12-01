import React, { useState } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState(''); // State to store the joke

  // Function to fetch a random Chuck Norris joke
  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data.value); // Set the joke text from API response
    } catch (error) {
      setJoke("Oops! Couldn't fetch a joke. Try again later.");
      console.error("Error fetching joke:", error);
    }
  };

  return (
    <div className="App">
      <h1>Chuck Norris Joke Generator</h1>
      <button onClick={fetchJoke}>Get a Joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default App;