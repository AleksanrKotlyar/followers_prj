import { Outlet } from "react-router-dom";

import { AppBar } from "components/AppBar/AppBar";
import { Suspense } from "react";
import { WrapSpinner } from "./Layout.styled";
import { Circles } from "react-loader-spinner";

export const Layout = () => {
	return (
		<>
			<AppBar />
			<Suspense
				fallback={
					<WrapSpinner>
						<Circles
							height="80"
							width="80"
							color="rgb(96 45 214)"
							ariaLabel="circles-loading"
							wrapperStyle={{}}
							wrapperClass=""
							visible={true}
						/>
					</WrapSpinner>
				}
			>
				<Outlet />
			</Suspense>
		</>
	);
};
