import React, { useState, useEffect } from 'react';
import '../styles/Banner.css';
import backgroundImage from '../images/BG.jpg';

const content = [
  {
    badge: 'Cursos',
    title: 'Plataforma de cursos completa',
    text: 'Lorem ipsum nullam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse.',
    button: 'Cursos'
  },
  {
    badge: 'Chat',
    title: 'Ferramenta de Chat Avançada',
    text: 'Lorem ipsum nullam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse.',
    button: 'Chat'
  },
  {
    badge: 'Bot',
    title: 'Soluções de Bot Inteligentes',
    text: 'Lorem ipsum nullam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse.',
    button: 'Bot'
  },
  {
    badge: 'Ferramenta',
    title: 'Ferramentas para Profissionais',
    text: 'Lorem ipsum nullam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse.',
    button: 'Ferramenta'
  }
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log(`Component mounted with currentIndex: ${currentIndex}`);
  }, [currentIndex]);

  const handlePrevious = () => {
    console.log('Previous clicked');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? content.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    console.log('Next clicked');
    setCurrentIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
  };

  const handleIndicatorClick = (index) => {
    console.log(`Indicator ${index} clicked`);
    setCurrentIndex(index);
  };

  return (
    <div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={`banner-content fade`}>
        <span className="badge">{content[currentIndex].badge}</span>
        <h2>{content[currentIndex].title}</h2>
        <p>{content[currentIndex].text}</p>
      </div>
      <div className="navigation">
        {content.map((_, index) => (
          <span
            key={index}
            className={`nav-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
        <span className="nav-arrow" onClick={handlePrevious}>&lt;</span>
        <span className="nav-arrow" onClick={handleNext}>&gt;</span>
      </div>
    </div>
  );
};

export default Banner;
