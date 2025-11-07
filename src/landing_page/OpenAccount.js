import React from "react";
function OpenAccount() {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        <h1>Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          type="button"
          className="btn btn-primary p-2 fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
