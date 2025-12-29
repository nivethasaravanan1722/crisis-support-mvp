import React, { useState } from "react";
import axios from "axios";

const CreateCrisis = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [urgency, setUrgency] = useState("low");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/crisis",
        { title, description, urgency },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Crisis created successfully");
      setTitle("");
      setDescription("");
    } catch (error) {
      alert("Error creating crisis");
    }
  };

  return (
    <div>
      <h2>Create Crisis</h2>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <br />

        <select value={urgency} onChange={(e) => setUrgency(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateCrisis;
