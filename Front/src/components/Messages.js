import React, { useEffect, useState } from "react";
import "../styles/Messages.css";

const Messages = ({ token, setToken }) => {
  const [messages, setMessages] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (token) fetchMessages();
  }, [token]);

  const fetchMessages = async () => {
    try {
      const response = await fetch("http://localhost:5000/messages", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await fetch(`http://localhost:5000/messages/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessages(messages.filter((msg) => msg._id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const filteredMessages = messages.filter(
    (msg) =>
      msg.email.includes(filter) ||
      new Date(msg.date).toLocaleDateString().includes(filter)
  );

  const handleLogout = () => {
    localStorage.removeItem("token"); // حذف توکن از localStorage
    setToken(""); // بروزرسانی وضعیت token در کامپوننت والد
  };

  return (
    <div>
      {token ? (
        <div>
          <h1>Messages</h1>
          <input
            type="text"
            placeholder="Filter by email or date"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <button className="Logout" onClick={handleLogout}>
            Logout
          </button>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredMessages.map((msg) => (
                <tr key={msg._id}>
                  <td>{msg.username}</td>
                  <td>{msg.email}</td>
                  <td>{msg.text}</td>
                  <td>{new Date(msg.date).toLocaleString()}</td>
                  <td>
                    <button onClick={() => deleteMessage(msg._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Please log in to view messages.</p> // پیام برای کاربری که وارد نشده است
      )}
    </div>
  );
};

export default Messages;
