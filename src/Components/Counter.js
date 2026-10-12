
import React, { useState } from "react";

const Counter = () => {
  const [entryCount, setEntryCount] = useState(0);
  const [exitCount, setExitCount] = useState(0);
  const [history, setHistory] = useState([]);

  const updateEntry = () => {
    setEntryCount((count) => count + 1);

    setHistory((prevHistory) =>
      [
        {
          id: Date.now() + Math.random(),
          action: "Entrance",
          time: new Date().toLocaleTimeString(),
        },
        ...prevHistory,
      ].slice(0, 10)
    );
  };

  const updateExit = () => {
    setExitCount((count) => count + 1);

    setHistory((prevHistory) =>
      [
        {
          id: Date.now() + Math.random(),
          action: "Exit",
          time: new Date().toLocaleTimeString(),
        },
        ...prevHistory,
      ].slice(0, 10)
    );
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        textAlign: "center",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#333" }}>
        Counter
      </h1>

      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          <strong>Entries:</strong>{" "}
          <span style={{ fontWeight: "bold", color: "#28a745" }}>
            {entryCount}
          </span>
        </p>

        <button
          className="btn btn-success"
          onClick={updateEntry}
          style={{ padding: "10px 20px", fontSize: "16px" }}
          aria-label="Add an entry"
        >
          Add Entry
        </button>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          <strong>Exits:</strong>{" "}
          <span style={{ fontWeight: "bold", color: "#dc3545" }}>
            {exitCount}
          </span>
        </p>

        <button
          className="btn btn-danger"
          onClick={updateExit}
          style={{ padding: "10px 20px", fontSize: "16px" }}
          aria-label="Add an exit"
        >
          Add Exit
        </button>
      </div>

      {/* Action History Table */}
      <h3 style={{ marginBottom: "15px" }}>Recent Actions</h3>

      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Action</th>
              <th scope="col">Time</th>
            </tr>
          </thead>

          <tbody>
            {history.length > 0 ? (
              history.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <span
                      className={`badge ${item.action === "Entrance"
                          ? "bg-success"
                          : "bg-danger"
                        }`}
                    >
                      {item.action}
                    </span>
                  </td>
                  <td>{item.time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-muted">
                  No actions recorded yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Counter;
