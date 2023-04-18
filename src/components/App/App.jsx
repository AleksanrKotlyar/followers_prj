import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import { Toaster } from "react-hot-toast";
import "utils/index.css";

const HomePage = lazy(() => import("pages/Home"));
const TweetsPage = lazy(() => import("pages/Tweets"));

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/tweets" element={<TweetsPage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Route>
			</Routes>
			<Toaster position="top-right" reverseOrder={false} />
		</>
	);
};
