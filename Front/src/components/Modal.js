import React, { useState } from "react";
import "../styles/Modal.css"; // Import CSS for styles

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, text } = formData;

    if (!username || !email || !text) {
      alert("تمام فیلدها باید پر شوند");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, text }),
      });

      if (response.status === 201) {
        alert("پیام شما با موفقیت ارسال شد");
        setFormData({ username: "", email: "", text: "" }); // Clear form
      } else {
        const errorText = await response.text();
        alert(`خطا: ${errorText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("مشکلی در ارسال پیام وجود دارد");
    }
    
  };

  return (
    <div className="open">
      <button onClick={() => setIsModalOpen(true)}>Open Contact Form</button>
      {isModalOpen && (
        <div className="modal" onSubmit={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span onClick={() => setIsModalOpen(false)} className="close">
              &times;
            </span>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Full Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="eamil"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="text">Message:</label>
                <textarea
                  className="form-control"
                  id="text"
                  name="text"
                  rows="5"
                  value={formData.text}
                  onChange={handleChange}
                  placeholder="message"
                  required
                ></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;