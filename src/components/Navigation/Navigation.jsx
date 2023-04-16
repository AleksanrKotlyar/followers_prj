import { Link } from "./Navigation.styled";
// import { useAuth } from 'hooks';
import HomeIcon from "@mui/icons-material/Home";

export const Navigation = () => {
	// const { isLoggedIn } = useAuth();

	return (
		<nav style={{ display: "flex", alignItems: "center" }}>
			<Link to="/">
				Home
				<HomeIcon
					sx={{
						ml: "1px",
					}}
					fontSize="18px"
				/>
			</Link>
			<Link to="tweets">Tweets</Link>
		</nav>
	);
};
