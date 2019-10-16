import Tooltip from "./ui-components/tooltip";

console.warn("index.js ve started");

// first tooltip
const tooltip1 = new Tooltip(document.querySelector("#tooltip1"));
tooltip1.init();
// second tooltip
const tooltip2 = new Tooltip(document.querySelector("#tooltip2"));
tooltip2.init();
