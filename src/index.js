import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App/App";
import "./utils/index.css";
import { theme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<BrowserRouter basename="/followers_prj/">
						<App />
					</BrowserRouter>
				</PersistGate>
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
