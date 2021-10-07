import { Link } from 'react-router-dom';

const Footer = () => (
  <div>
    <footer className="__footer">
      <div className="__center-sub-section">
        <div className="category__options">
          <Link to="/" className="category">
            <img src="./img/icons/footer/home__logo.png" alt="" />
            <h1>Home</h1>
          </Link>
          <Link to="/terms" className="category">
          <img src="./img/icons/footer/ticket__logo.png" alt="" />
            <h1>Buy Ticket</h1>
          </Link>
          <Link to="/privacy" className="category">
          <img src="./img/icons/footer/agenda__logo.png" alt="" />
            <h1>Agenda</h1>
          </Link>
          <Link to="/contact" className="category">
          <img src="./img/icons/footer/contact__logo.png" alt="" />
            <h1>Contact</h1>
          </Link>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
