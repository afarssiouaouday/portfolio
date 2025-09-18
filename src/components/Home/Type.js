import React from "react";
import Typewriter from "typewriter-effect";
import { typewriterStrings } from "../../data/typewriterData";

function Type() {
  return (
    <Typewriter
      options={{
        strings: typewriterStrings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;