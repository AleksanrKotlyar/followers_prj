import { Link } from "./Navigation.styled";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const Navigation = () => {
	// const { isLoggedIn } = useAuth();

	return (
		<nav style={{ display: "flex", alignItems: "center" }}>
			<Link to="/">
				<span>Home</span>
				<HomeIcon
					sx={{
						ml: "1px",
					}}
					fontSize="18px"
				/>
			</Link>
			<Link to="tweets">
				<span>Tweets</span>
				<BookmarkIcon
					sx={{
						ml: "1px",
					}}
					fontSize="18px"
				/>
			</Link>
		</nav>
	);
};
