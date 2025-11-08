import React from "react";

function Universe() {
  return (
    <div className="container mt-5 p-5">
      <div className="text-center mb-5">
        <h3>The Zerodha Universe</h3>
        <p className="fs-5 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center">
        <div className="col-md-4 p-3 mt-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            className="universe-logo"
            alt="Zerodha Fund House logo"
          />
          <p className="product-text">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-md-4 p-3 mt-4">
          <img
            src="media/images/sensibullLogo.svg"
            className="universe-logo"
            alt="Sensibull logo"
          />
          <p className="product-text">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-md-4 p-3 mt-4">
          <img
            src="media/images/tijoriLogo.svg"
            className="universe-logo"
            alt="Tijori logo"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/150x40/000000/FFF?text=Tijori";
            }}
          />
          <p className="product-text">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-md-4 p-3 mt-4">
          <img
            src="media/images/streakLogo.png"
            className="universe-logo"
            alt="Streak logo"
          />
          <p className="product-text">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-md-4 p-3 mt-4">
          <img
            src="media/images/smallcaseLogo.png"
            className="universe-logo"
            alt="smallcase logo"
          />
          <p className="product-text">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-md-4 p-3 mt-4">
          <img
            src="media/images/dittoLogo.png"
            className="universe-logo"
            alt="Ditto logo"
          />
          <p className="product-text">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>

      <div className="text-center p-4">
        <button
          type="button"
          class="btn btn-primary p-2 fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
