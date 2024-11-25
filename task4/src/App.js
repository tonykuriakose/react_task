import React, { useState, useRef } from "react";

function App() {
  const [controlledValue, setControlledValue] = useState("");
  const [error, setError] = useState("");
  const uncontrolledRef = useRef(null);
  const controlledRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const controlledInputValue = controlledValue.trim();
    const uncontrolledInputValue = uncontrolledRef.current.value.trim();

    if (!controlledInputValue || !uncontrolledInputValue) {
      setError("Both fields are required!");
      if (!controlledInputValue) controlledRef.current.focus();
      else uncontrolledRef.current.focus();
      return;
    }

    setError(""); 

    console.log("Controlled Input:", controlledInputValue);
    console.log("Uncontrolled Input:", uncontrolledInputValue);

    setControlledValue("");
    uncontrolledRef.current.value = "";
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" }}>
      <h2>React Form Example</h2>
      <form onSubmit={handleSubmit}>
        {/* Controlled Input */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="controlledInput">Controlled Input:</label>
          <input
            id="controlledInput"
            type="text"
            ref={controlledRef} 
            value={controlledValue}
            onChange={(e) => setControlledValue(e.target.value)}
            style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        {/* Uncontrolled Input */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="uncontrolledInput">Uncontrolled Input:</label>
          <input
            id="uncontrolledInput"
            type="text"
            ref={uncontrolledRef} 
            style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        {/* Error Message */}
        {error && <p style={{ color: "red", marginBottom: "15px" }}>{error}</p>}

        {/* Submit Button */}
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

