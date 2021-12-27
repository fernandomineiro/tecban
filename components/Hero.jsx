import React from 'react';
import Logo from './Logo';

const Hero = () => (
  
  
  <div className="hero my-3 text-center" data-testid="hero">
    
    <Logo testId="hero-logo" />
    
    <h1 className="mb-4" data-testid="hero-title">
      Acesse todas suas contas em um único lugar 
    </h1>

  </div>
);

export default Hero;
