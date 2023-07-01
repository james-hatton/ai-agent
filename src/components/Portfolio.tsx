import React, { useEffect, useState } from 'react';
import { Portfolio } from '../types/portfolio';
import { getPortfolio } from '../services/portfolioService';
import '../styles/Portfolio.css';

const PortfolioComponent: React.FC = () => {
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);

  useEffect(() => {
    getPortfolio().then(data => setPortfolio(data));
  }, []);

  return (
    <div id="portfolio" className="portfolio">
      <h2>My Portfolio</h2>
      {portfolio.map((item, index) => (
        <div key={index} className="portfolio-item">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a href={item.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  );
};

export default PortfolioComponent;