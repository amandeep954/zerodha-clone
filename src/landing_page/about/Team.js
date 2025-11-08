import React from "react";
function Team() {
  return (
    <div className="container px-5 pb-5">
      <div className="row mb-5 text-center">
        <h2>People</h2>
      </div>
      <div className="row p-5">
        <div className="col text-center">
          <img
            src="media/images/nithinkamath.jpg"
            alt=""
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h5>Founder, CEO</h5>
        </div>
        <div className="col" style={{ lineHeight: "1.8", fontSize: "1.1em",paddingRight:"10%" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href="/">Homepage</a>/<a href="/">TradingQnA</a>/<a href="/">Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
