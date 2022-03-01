import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        <a
          href="https://github.com/katrinkan/vanilla-space-weather"
          target="_blank"
          rel="noreferrer"
        >
          Code
        </a>{" "}
        with{" "}
        <span role="img" aria-label="heart">
          💜
        </span>{" "}
        by Katrin Kanape
      </small>
    </div>
  );
}
