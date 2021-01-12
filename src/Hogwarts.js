import React from "react";
import whoseHouse from "./houses/whoseHouse";
import HooflePoof from "./houses/Hufflepuff";
import * as GryffFunctions from "./houses/Gryffindor";

GryffFunctions.colors();
// => 'Scarlet and Gold'

GryffFunctions.gryffMascot();
// => 'The Lion'


// => ReferenceError: values is not defined

export default function Hogwarts() {
  whoseHouse();

  return (
    <div>
      <HooflePoof />
      {/*
				Will render `NOBODY CARES ABOUT US`, even though we renamed `Hufflepuff`
				to `HooflePoof`
			*/}
    </div>
  );
}
