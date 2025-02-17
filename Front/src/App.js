import React, { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Resume from "./components/Resume";
import Parallax from "./components/Parallax";
import Bs from "./components/Bs";
import Fs from "./components/Fs";
import ImageGallery from "./components/ImageGallery";
import Messages from "./components/Messages";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState("");

  return (
    <div className="App">
      <Parallax />
      <Header />
      <Resume />
      <Modal />
      <div>
        {!token ? (
          <Login setToken={setToken} /> // اگر توکن موجود نیست، صفحه ورود نشان داده می‌شود
        ) : (
          <Messages token={token} setToken={setToken} /> // اگر توکن موجود است، پیام‌ها نمایش داده می‌شود
        )}
      </div>
      <Bs />
      <ImageGallery />
      <Fs />
    </div>
  );
}

export default App;
