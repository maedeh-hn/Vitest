import { extractEnteredNumberValues, extractNumbers } from "./src/parser.js";

import { calculateResult } from "./src/math.js";
import { generateResultText, outPutResult } from "./src/outPut.js";

const form = document.querySelector("form");


function formSubmitHandler(event) {
  event.preventDefault();
  const NumberValues = extractEnteredNumberValues(form);
  const result = calculateResult(NumberValues);

  const resultText = generateResultText(result);

outPutResult(resultText)
}

form.addEventListener("submit", formSubmitHandler);
