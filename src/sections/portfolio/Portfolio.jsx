import "./portfolio.css";
import cardImg from "../../assets/responsive-cards-thumbnail.png";
import cryptoImg from "../../assets/cryptoB.png";
import productPageImg from "../../assets/productPage.png";
import reactCalcuImg from "../../assets/react-calculator.png";
import foodWebsite from "../../assets/food-website.png";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 data-aos="fade-down" data-aos-delay="400">
        Recent Projects
      </h2>
      <p data-aos="fade-down" data-aos-delay="500">
        Check out some of the projects I recently worked on.
      </p>

      <div
        className="container portfolio__container"
        data-aos="fade-up"
        data-aos-delay="600"
      >

        {/* CRYPTO LANDING PAGE */}
        <div className="portfolio__left">
          <div className="portfolio__image">
            <img src={cryptoImg} alt="" className="portfolio__img" />
          </div>

          <div className="portfolio__right">
            <h4>Self Made Cryptocurrency website</h4>

            <div className="description">
              <p className="card__description">
                Online platform that provides information, tools, and resources
                related to cryptocurrencies and blockchain technology.
              </p>
            </div>
            <div className="languages">
              <span>vite</span>
              <span>react</span>
              <span>tailwind</span>
            </div>

            <div className="portfolio__demo">
              <a target="_blank"
                href="https://sample-landing-page-lake.vercel.app/"
                className="btn primary sm"
              >
                Demo
              </a>
              <a target="_blank"
                href="https://github.com/Dhan25/sample-landing-page"
                className="btn white sm git-btn"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        {/* PRODUCT LANDING PAGE */}
        <div className="portfolio__left">
          <div className="portfolio__image">
            <img src={productPageImg} alt="" className="portfolio__img" />
          </div>

          <div className="portfolio__right">
            <h4>Product Landing Page</h4>

            <div className="description">
              <p className="card__description">
                The Lebron XX product landing page for NBA player Lebron James'
                new shoes.
              </p>
            </div>
            <div className="languages">
              <span>vite</span>
              <span>react</span>
              <span>tailwind</span>
            </div>

            <div className="portfolio__demo">
              <a target="_blank"
                href="https://product-landing-page-roan.vercel.app/"
                className="btn primary sm"
              >
                Demo
              </a>
              <a target="_blank"
                href="https://product-landing-page-git-main-dhan25.vercel.app/"
                className="btn white sm git-btn"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        {/* RESPONSIVE CARDS */}
        <div className="portfolio__left">
          <div className="portfolio__image">
            <img src={cardImg} alt="" className="portfolio__img" />
          </div>

          <div className="portfolio__right">
            <h4>Responsive Cards</h4>

            <div className="description">
              <p className="card__description">
                These cards are flexible and adapt smoothly to various screen
                sizes, such as those of desktop computers, tablets, and
                smartphones. That display three different historical places in
                the world.
              </p>
            </div>
            <div className="languages">
              <span>vite</span>
              <span>react</span>
              <span>tailwind</span>
            </div>

            <div className="portfolio__demo">
              <a target="_blank"
                href="https://responsive-cards-sepia.vercel.app/"
                className="btn primary sm"
              >
                Demo
              </a>
              <a target="_blank"
                href="https://responsive-cards-git-main-dhan25.vercel.app/"
                className="btn white sm git-btn"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        {/* REACT CALCULATOR */}
        <div className="portfolio__left">
          <div className="portfolio__image">
            <img src={reactCalcuImg} alt="" className="portfolio__img" />
          </div>

          <div className="portfolio__right">
            <h4>React Calculator</h4>

            <div className="description">
              <p className="card__description">
                A React.js calculator is a digital tool built using the React.js
                library, designed to perform mathematical calculations. It
                functions similar to a physical calculator but is a web-based
                application that you can access through a browser.
              </p>
            </div>
            <div className="languages">
              <span>vite</span>
              <span>react</span>
              <span>tailwind</span>
            </div>

            <div className="portfolio__demo">
              <a target="_blank"
                href="https://react-calculator-ivory-theta.vercel.app/"
                className="btn primary sm"
              >
                Demo
              </a>
              <a target="_blank"
                href="https://react-calculator-git-main-dhan25.vercel.app/"
                className="btn white sm git-btn"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        {/* FOOD WEBSITE */}
        <div className="portfolio__left">
          <div className="portfolio__image">
            <img src={foodWebsite} alt="" className="portfolio__img" />
          </div>

          <div className="portfolio__right">
            <h4>Food Restaurant Website</h4>

            <div className="description">
              <p className="card__description">
                An online platform where you can find out more about different
                sorts of filipino foods and culinary experiences. It provides a
                wide variety of cooking, recipe, restaurant, and food
                culture-related content.
              </p>
            </div>
            <div className="languages">
              <span>vite</span>
              <span>react</span>
              <span>tailwind</span>
            </div>

            <div className="portfolio__demo">
              <a target="_blank"
                href="https://food-website-theta-sepia.vercel.app/"
                className="btn primary sm"
              >
                Demo
              </a>
              <a target="_blank"
                href="https://food-website-theta-sepia.vercel.app/"
                className="btn white sm git-btn"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
