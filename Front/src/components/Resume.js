import React from "react";
import "../styles/Resume.css"; // فرض بر این است که استایل‌ها در فایل Resume.css قرار دارند
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUniversity, faSchool, faChalkboardTeacher, faCode, faMobileAlt, faDatabase, faImage, faLanguage } from "@fortawesome/free-solid-svg-icons";
// import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";

const Resume = () => {
  return (
    <section className="resume">
      <div className="container">
        {/* Education */}
        <h2 className="section-title">Education</h2>
        <ul className="resume-list">
          <li className="resume-item">
            {/* <FontAwesomeIcon icon={faUniversity} /> */}
            <strong>Bachelor's Degree in Computer Engineering (IT)</strong> -
            Yazd University (2019-2024)
          </li>
          <li className="resume-item">
            {/* <FontAwesomeIcon icon={faSchool} /> */}
            <strong>High School Diploma in Mathematics and Physics</strong> -
            Shahid Imam Mahdi High School (2016-2019)
          </li>
        </ul>

        {/* Courses */}
        <h2 className="section-title">Completed Courses</h2>
        <ul className="resume-list">
          <li className="resume-item">
            {/* <FontAwesomeIcon icon={faChalkboardTeacher} /> */}
            Photoshop (Beginner to Intermediate)
          </li>
          <li className="resume-item">
            {/* <FontAwesomeIcon icon={faCode} /> */}
            C# Programming (Beginner to Advanced)
          </li>
          <li className="resume-item">
            {/* <FontAwesomeIcon icon={faMobileAlt} /> */}
            Mobile Programming with Java
          </li>
          <li className="resume-item">
            {/* <FontAwesomeIcon icon={faDatabase} /> */}
            SQL Server
          </li>
          <li className="resume-item">
            {/* <FontAwesomeIcon icon={faCode} /> */}
            HTML & CSS
          </li>
        </ul>

        {/* Skills */}
        <h2 className="section-title">Skills</h2>
        <ul className="resume-list">
          <li className="resume-item">
            {/* <FontAwesomeIcon icon={faMicrosoft} /> */}
            Office Suite: Word, Excel, PowerPoint
          </li>
          <li className="resume-item">
            {/* <FontAwesomeIcon icon={faImage} /> */}
            Photoshop
          </li>
          <li className="resume-item">
            {/* <FontAwesomeIcon icon={faCode} /> */}
            C# Programming
          </li>
          <li className="resume-item">
            {/* <FontAwesomeIcon icon={faMobileAlt} /> */}
            Android Studio (Java)
          </li>
          <li className="resume-item">
            {/* <FontAwesomeIcon icon={faCode} /> */}
            HTML, CSS
          </li>
          <li className="resume-item">
            {/* <FontAwesomeIcon icon={faDatabase} /> */}
            SQL Server
          </li>
        </ul>

        {/* Languages */}
        <h2 className="section-title">Languages</h2>
        <ul className="resume-list">
          <li className="resume-item">
            {/* <FontAwesomeIcon icon={faLanguage} /> */}
            English - Intermediate Proficiency
          </li>
          <li className="resume-item">
            {/* <FontAwesomeIcon icon={faLanguage} /> */}
            Arabic - Intermediate Proficiency
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
