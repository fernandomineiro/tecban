import React from 'react';

const Footer = () => (
  <footer className="bg-light p-3 text-center" data-testid="footer">
              <img
          src="/logo-colorido.png" 
          width="40"
          alt="..."
          ></img>
    <p data-testid="footer-text">
      Desenvolvido por <a href="https://www.tecban.com.br/produtos-e-solucoes/open-finance/" target="_blank">Tecban</a>
    </p>
  </footer>
);

export default Footer;
