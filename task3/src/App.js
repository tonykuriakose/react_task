import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(1); // Counter state
  const [user, setUser] = useState(null); // User data state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Function to increment count
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  // Function to decrement count
  const decrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1)); // Minimum count is 1
  };

  // Fetch user data whenever count changes
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${count}`
        );
        setUser(response.data);
      } catch (err) {
        setError("Failed to fetch user data");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [count]);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <div style={{ marginTop: "20px" }}>
        {loading && <p>Loading user data...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {user && (
          <div>
            <h2>User Information</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
