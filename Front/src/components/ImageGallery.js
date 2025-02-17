import React, { useState, useEffect } from "react";
import "../styles/ImageGallery.css";

const ImageGallery = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // تابع برای دریافت تصویر جدید
  const fetchImage = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://picsum.photos/600/400"); // دریافت یک تصویر تصادفی
      if (response.ok) {
        setImage(response.url);
      } else {
        console.error("دریافت تصویر ناموفق بود");
      }
    } catch (error) {
      console.error("خطا در دریافت تصویر:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImage(); // بارگذاری تصویر اولیه در زمان بارگذاری کامپوننت
  }, []);

  const handleNext = () => {
    fetchImage(); // دریافت تصویر جدید با کلیک روی دکمه "بعدی"
  };

  return (
    <div className="wall">

      <button onClick={() => setShowModal(true)}>Fetch in Gallery</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            {loading ? (
              <p>Loading ...</p>
            ) : (
              <img
                src={image}
                alt="Random"
                style={{ width: "80%", height: "auto" }}
              />
            )}
            <div>
              <button onClick={handleNext}>Next</button>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
