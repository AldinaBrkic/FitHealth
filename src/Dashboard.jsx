// dashboard.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/Menu');
  };

  useEffect(() => {
    const googleTranslateScript = document.createElement('script');
    googleTranslateScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    googleTranslateScript.async = true;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };

    document.body.appendChild(googleTranslateScript);

    return () => {
      
    };
  }, []);

  return (
    <div className="dashboard">
      <div className='trElement'>
        <div id="google_translate_element"></div>
      </div>
      <div className="circle">FH</div>
      <h1 className="title">FitHealth</h1>
      <button className="start-button" onClick={handleStartClick}>
        Start
      </button>
    </div>
  );
};

export default Dashboard;
