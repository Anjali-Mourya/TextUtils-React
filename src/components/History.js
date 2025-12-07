export default function History({ history, mode }) {
  return (
    <div className={`card ${mode}`} style={{ marginTop: "100px" }}>
      <h2 className="text-center mb-5" style={{ color: "white" }}>Your Activity History</h2>
      
      {history.length === 0 ? (
        <p className="text-center" style={{ color: "rgba(255,255,255,0.7)" }}>No actions yet. Start converting text!</p>
      ) : (
        <ul className="history-list">
          {history.slice().reverse().map((item, i) => (
            <li key={i} className="history-item">
              <strong>{item.action}</strong> 
              {item.text && ` → "${item.text.substring(0, 50)}${item.text.length > 50 ? '...' : ''}"`}
              <span className="time">{item.time.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}