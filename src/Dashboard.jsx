import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/menu');
  };

  useEffect(() => {
    const googleTranslateScript = document.createElement('script');
    googleTranslateScript.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
    googleTranslateScript.async = true;
    googleTranslateScript.defer = true;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };

    document.body.appendChild(googleTranslateScript);

    return () => {
      if (googleTranslateScript) {
        document.body.removeChild(googleTranslateScript);
      }
    };
  }, []);

  return (
    <div className="dashboard">
      <div className="translate" id="google_translate_element"></div>
      <h1 className="title">FitHealth</h1>
      <button className="start-button" onClick={handleStartClick}>Start</button>
    </div>
  );
};

export default Dashboard;
