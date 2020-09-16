import React from "react";
import TopMessage from "./TopMessage";
import MiddleMessage from "./MiddleMessage";
import JoinMessage from "./JoinMessage";

export default function TopContainer() {
  return (
    <div>
      <TopMessage />
      <MiddleMessage />
      <JoinMessage />
    </div>
  );
}
