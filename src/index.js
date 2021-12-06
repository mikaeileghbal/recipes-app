import React from "react";
import ReactDom from "react-dom";
import { render } from "react-dom";
import Menu from "./component/menu";
import data from "./data/recipes.json";

render(<Menu recipes={data} />, document.getElementById("root"));

// (() => {
// 	let data = [1, 2, 3];
// 	console.log("webpack worked...");
// 	for (let i = 0; i < data.length; i++) {
// 		console.log("data: ", data[i]);
// 	}
// })();

// ReactDom.render(
// 	React.createElement("div", null, "Hello React modified for sixth time..."),
// 	document.getElementById("root")
// );
