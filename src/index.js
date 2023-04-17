import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App/App";
import "./utils/index.css";
import { theme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter basename="/followers_prj/">
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
