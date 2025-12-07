import React from "react";

export default function Home({ mode }) {
  return (
    <div className="home-hero">
      <h1>Welcome to TextUtils</h1>
      <p>
        The ultimate text transformation tool — convert case, remove spaces, copy, download, 
        and track every change with beautiful history tracking.
      </p>
      <div className="mt-5 home-btn-hero">
        <a href="/convert" className="btn-modern mx-2">Start Converting</a>
        <a href="/history" className="btn-modern mx-2" style={{background: "rgba(255,255,255,0.2)"}}>View History</a>
      </div>
    </div>
  );
}