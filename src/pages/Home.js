import Footer from '../components/shared/Footer';
import { Link } from 'react-router-dom';
import EmailForm from '../components/EmailForm';

// eslint-disable-next-line
const HomePage = () => (
  <div>
    <header>
      <nav role="navigation">
        <div className="main-logo">
          <a href="../">
            <img src="./img/allin-logo.png" alt="" />
          </a>
        </div>
        <div>

        </div>
      </nav>
    </header>

    <main>
      <section className="__WHome_box__999cs">
        <div className="__WHsection_1__999cs">
          <div className="__middle-heading">
            <img src="./img/1500x500-2.jpeg" alt="" />
          </div>
          <h1>
            {' ALL IN SUMMIT '}
          </h1>
          <h2>
            {'MIAMI - 2022'}
          </h2>
        </div>
      </section>
      <section className="__WHome_box__999cs">
        <div className="__WHsection_2__999cs">
          <div className="__middle-heading">
            <img src="./img/icons/light/ticket-white.png" alt="" />
            <h1>
              {' Buy your ticket today. '}
            </h1>
          </div>
            <Link to="/" className="__buy-btn">
                Buy 
            </Link>
        </div>
      </section>
      <section className="__WHome_box__999cs">
        <div className="__WHsection_3__999cs">
          <h1>Get updates</h1>
          <EmailForm />
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default HomePage;
