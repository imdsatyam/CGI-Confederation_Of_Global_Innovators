import React from "react";

const Error = () => {
  return (
    <div className="mainError">
      <div className="Error">
        <h1 className="ErrorCode">404</h1>
        <p className="ErrorMsg">
          {" "}
          <span>Opps!</span> Page not found.
        </p>
        <p className="ErrorMsgNext">The page you’re looking for doesn’t exist.</p>
        <a href="/" className="btn">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default Error;
