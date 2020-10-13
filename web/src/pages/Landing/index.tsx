import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import './styles.css';
import logoImage from '../../assets/img/Logo.svg'

const Landing: React.FC = () => {
  return (
    <div className="landing-container">
      <div className="container">
        <div className="logo" >
        <img src={logoImage} alt="logo" />
        </div>
        <div className="city">

        <p><strong>Bom Jardim</strong>Maranhão</p>
        </div>
        <div  className="title">
        <h1>Leve felicidade para o mundo</h1>
        </div>
        <div className="subtitle">

        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </div>
        <div className="next-button">
        <button> <FiArrowRight size={20} /> </button>
        </div>
        
      </div>
    </div>
  );
}

export default Landing;