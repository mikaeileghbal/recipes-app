import React from "react";

export default function Ingredient({ amount, measuremnet, name }) {
	return (
		<li>
			{amount} {measuremnet} {name}
		</li>
	);
}
