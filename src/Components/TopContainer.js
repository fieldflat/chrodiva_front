import React from "react";
import Navbar from "./Navbar";
import TopMessage from "./TopMessage";
import MiddleMessage from "./MiddleMessage";
import JoinMessage from "./JoinMessage";
import Footer from "./Footer";

export default function TopContainer() {
  return (
    <div>
      <TopMessage />
      <MiddleMessage />
      <JoinMessage />
    </div>
  );
}
