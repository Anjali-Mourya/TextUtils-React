import React, { useState } from "react";

export default function TextForm({ showAlert, mode, addToHistory }) {
  const [text, setText] = useState("");

  const actions = [
    { label: "Uppercase", action: () => { let t = text.toUpperCase(); setText(t); addToHistory("Uppercase", t); showAlert("Converted to Uppercase!", "success"); }},
    { label: "Lowercase", action: () => { let t = text.toLowerCase(); setText(t); addToHistory("Lowercase", t); showAlert("Converted to Lowercase!", "success"); }},
    { label: "Clear", action: () => { setText(""); addToHistory("Clear Text", ""); showAlert("Text cleared!", "success"); }},
    { label: "Copy", action: () => { navigator.clipboard.writeText(text); addToHistory("Copy", text); showAlert("Copied to clipboard!", "success"); }},
    { label: "Remove Spaces", action: () => { let t = text.split(/[ ]+/).join(" "); setText(t); addToHistory("Remove Extra Spaces", t); showAlert("Extra spaces removed!", "success"); }},
    { label: "Download", action: () => { const blob = new Blob([text], { type: "text/plain" }); const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = "textutils-output.txt"; a.click(); addToHistory("Download", text); showAlert("Downloaded!", "success"); }},
  ];

  return (
    <div className={`card ${mode}`} style={{ marginTop: "100px" }}>
      <h2 className="text-center mb-4" style={{ color: "white", fontWeight: "600" }}>
        Enter Your Text Below
      </h2>

      <textarea
        className={`styled-textarea ${mode}`}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing or paste your text here..."
      />

      <div className="btn-area d-flex flex-wrap justify-content-center gap-3 my-4">
        {actions.map((btn, i) => (
          <button key={i} className="btn-modern" onClick={btn.action}>
            {btn.label}
          </button>
        ))}
      </div>

      <div className="text-center text-white">
        <h4>Summary</h4>
        <p>{text.split(/\s+/).filter(w => w).length} words • {text.length} characters • {0.008 * text.split(/\s+/).filter(w => w).length} min read</p>
        <h4 className="mt-4">Preview</h4>
        <p style={{ background: "rgba(0,0,0,0.2)", padding: "20px", borderRadius: "12px", minHeight: "100px" }}>
          {text || "Your text will appear here..."}
        </p>
      </div>
    </div>
  );
}