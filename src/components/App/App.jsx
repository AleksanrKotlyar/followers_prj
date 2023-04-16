import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Toaster } from "react-hot-toast";
import "../../utils/index.css";

const HomePage = lazy(() => import("../../pages/Home"));
const TweetsPage = lazy(() => import("../../pages/Tweets"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/tweets" element={<TweetsPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
			<Toaster position="top-right" reverseOrder={false} />
		</>
	);
};
