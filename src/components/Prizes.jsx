import React from 'react';
import './Prizes.css';

const prizes = [
  { rank: '1st Place', amount: '₹XX,XXX', perks: ['Winner Trophy', 'Certificates', 'Premium Swag'] },
  { rank: '2nd Place', amount: '₹XX,XXX', perks: ['Runner-up Trophy', 'Certificates', 'Cool Swag'] },
  { rank: '3rd Place', amount: '₹XX,XXX', perks: ['Third Place Trophy', 'Certificates', 'Basic Swag'] },
];

const Prizes = () => {
  return (
    <section className="prizes-section" id="prizes">
      <h2 className="section-title">PRIZES & INCENTIVES</h2>
      <div className="prizes-container">
        {prizes.map((prize, index) => (
          <div key={index} className="prize-card">
            <h3 className="rank">{prize.rank}</h3>
            <div className="amount">{prize.amount}</div>
            <ul className="perks">
              {prize.perks.map((perk, i) => (
                <li key={i}>{perk}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="other-perks">
        <div className="perk-item">Certificates for all participants</div>
        <div className="perk-item">Internship opportunities</div>
        <div className="perk-item">Swags & goodies</div>
      </div>
    </section>
  );
};

export default Prizes;
