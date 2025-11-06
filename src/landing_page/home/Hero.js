import React from "react";
function Hero() {
  return (
    <div class="container p-5 mb-5 ">
      <div class="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Zerodha home banner"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
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

export default Hero;
