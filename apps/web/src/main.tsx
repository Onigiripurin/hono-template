import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

if (!root) {
	throw new Error("Root element not found");
}

createRoot(root).render(
	<StrictMode>
		<p style={{ fontSize: "4rem", fontWeight: "bold" }}>Hello World</p>
	</StrictMode>,
);
