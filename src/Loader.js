import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="Loader">
      <ThreeCircles
        color="#ff7ac6"
        innerCircleColor="#f1fb8c"
        outerCircleColor="#b891f3"
        height={210}
        width={210}
        ariaLabel="three-circles-rotating"
      />
    </div>
  );
}
