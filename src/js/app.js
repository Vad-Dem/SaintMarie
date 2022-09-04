import * as flsFunction from "./function.js";
import WOW from "../../node_modules/wow.js/dist/wow.js";
document.addEventListener("DOMContentLoaded", function () {
  flsFunction.isWebp();
  console.log(WOW);
  new WOW({
    mobile: true,
  }).init();
});
