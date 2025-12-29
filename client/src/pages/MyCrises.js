import { useEffect, useState } from "react";
import api from "../api/axios";

export default function MyCrises() {
  const [crises, setCrises] = useState([]);

  useEffect(() => {
    api.get("/crisis/my").then(res => setCrises(res.data));
  }, []);

  return (
    <div>
      <h2>My Crises</h2>
      {crises.map(c => (
        <div key={c._id}>
          <h4>{c.title}</h4>
          <p>{c.description}</p>
          <p>Status: {c.status}</p>
        </div>
      ))}
    </div>
  );
}
