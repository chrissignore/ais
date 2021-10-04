/* eslint-disable react/button-has-type */
import Footer from '../components/shared/Footer';

const Offers = () => (
  <div>
    <main>
      <section className="__first-adpost-section">
        <div className="__outer-sub-section">
          <div className="__center-title">
            <h2>Platform</h2>
          </div>
          <div className="__center-sub-section">
            <div className="category__options">
              <div className="category">
                <img src="./multimedia/img/icons/social/light/__youtube-logo.png" alt="" />
                <h1>
                  YouTube
                </h1>
              </div>
              <div className="category">
                <img src="./multimedia/img/icons/social/light/__tiktok-logo.png" alt="" />
                <h1>
                  TikTok
                </h1>
              </div>
              <div className="category">
                <img src="./multimedia/img/icons/social/light/__twitch-logo.png" alt="" />
                <h1>
                  Twitch
                </h1>
              </div>
              <div className="category">
                <img src="./multimedia/img/icons/social/light/__instagram-logo.png" alt="" />
                <h1>
                  Instagram
                </h1>
              </div>
              <div className="category">
                <img src="./multimedia/img/icons/social/light/__twitter-logo.png" alt="" />
                <h1>
                  Twitter
                </h1>
              </div>
              <div className="category">
                <img src="./multimedia/img/icons/social/light/__snap-logo.png" alt="" />
                <h1>
                  SnapChat
                </h1>
              </div>
              <div className="category">
                <img src="./multimedia/img/icons/social/light/__fb-logo.png" alt="" />
                <h1>
                  Facebook
                </h1>
              </div>
              <div className="category">
                <img src="./multimedia/img/icons/social/light/__clubhouse-logo.png" alt="" />
                <h1>
                  Clubhouse
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="__second-adpost-section">
        <div className="__outer-sub-section">
          <div className="__center-title">
            <h2>Followers</h2>
            <p>
              <output name="number-690" id="outputnumber690" htmlFor="number690">25,000</output>
              +
            </p>
          </div>
          <div className="__center-sub-section">
            <div className="__slider">
              <input id="number690" onInput="outputnumber690.value=addCommas(number690.value)" type="range" lang="en-150" name="number-690" value="0" min="25000" max="1000000" step="25000" />
            </div>
          </div>
        </div>
      </section>
      <section className="__third-adpost-section">
        <div className="__outer-sub-section">
          <div className="__center-title">
            <h2>Likes</h2>
            <p>
              <output name="number-691" id="outputnumber691" htmlFor="number691">5,000</output>
              +
            </p>
          </div>
          <div className="__center-sub-section">
            <div className="__slider">
              <input id="number691" onInput="outputnumber691.value=addCommas(number691.value)" type="range" lang="en-150" name="number-691" value="0" min="5000" max="500000" step="5000" />
            </div>
          </div>
        </div>
      </section>
      <section className="__fourth-adpost-section">
        <div className="__outer-sub-section">
          <div className="__center-title">
            <h2>
              Price
              <sup>1</sup>
            </h2>
            <p>
              $
              <output name="number-692" id="outputnumber692" htmlFor="number692">10</output>
            </p>
          </div>
          <div className="__center-sub-section">
            <div className="__slider">
              <input id="number692" onInput="outputnumber692.value=addCommas(number692.value)" type="range" lang="en-150" name="number-692" value="0" min="10" max="10000" step="10" />
            </div>
          </div>
        </div>
      </section>
      <section className="__fifth-adpost-section">
        <div className="__outer-sub-section">
          <div className="__center-title">
            <h2>Thumbnail</h2>
          </div>
          <div className="__center-sub-section">
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            />
          </div>
        </div>
      </section>
      <section className="__sixth-adpost-section">
        <div className="__outer-sub-section">
          <div className="__center-title">
            <h2>Gist</h2>
          </div>
          <div className="__center-sub-section">
            <textarea placeholder="Enter ad requirements here..." name="" id="" />
          </div>
        </div>
      </section>
      <section className="__seventh-adpost-section">
        <div className="__center-sub-section">
          <button onClick="window.location.href='../marketplace.html">
            <div className="glow-on-hover">
              POST
            </div>
          </button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Offers;
