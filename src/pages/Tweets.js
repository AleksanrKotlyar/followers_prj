import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
	fetchTweets,
	fetchAllTweets,
	updateTweets,
} from "services/API services";
import { TweetsList } from "components/TweetsList/TweetsList";
import PaginationRounded from "components/Pagination/Pagination";
import {
	BtnBack,
	StyledLabel,
	StyledSelect,
} from "components/TweetsList/TweetsList.styled.jsx";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
// import SelectSmall from "components/Filter/Filter";
import Container from "components/Container/Container";
import { Box } from "@mui/material";

// import { ToTopButton } from "components/ToTopBtn/ToTopBtn";

export default function Tweets() {
	const [page, setPage] = useState(pageFromLS());
	const [users, setUsers] = useState([]);
	const [filterValue, setFilterValue] = useState("show all");
	const [numbPage, setNumbPage] = useState(1);
	const [filter, setFilter] = useState();

	const navigate = useNavigate();
	const location = useLocation();
	const linkToBack = location.state?.from ?? "/";

	useEffect(() => {
		(async function fetchAllUsers() {
			const payload = await fetchAllTweets(filter !== null ? filter : null);

			const countPage = Math.round(Number(payload.length) / 12);
			setNumbPage(countPage);
		})();
		(async function fetchUsers() {
			const payload = await fetchTweets(page, filter !== null ? filter : null);

			setUsers(payload);
		})();
	}, [page, filter]);

	function pageFromLS() {
		try {
			const isPageLocalStorage = localStorage.getItem("page");
			const isPageInLocalStorageParsed = JSON.parse(isPageLocalStorage);

			return isPageInLocalStorageParsed;
		} catch (error) {
			console.error(error);
		}
	}

	const handlePageChange = (e, p) => {
		setPage(p);
		localStorage.setItem("page", JSON.stringify(p));

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	// const handleClick = (id) => {
	// 	const user = users.find((item) => item.id === id);
	// 	const indx = user.following.includes(id);

	// 	if (!indx) {
	// 		const data = [...user.following, id];
	// 		const count = user.followers + 1;

	// 		(async function updateUsers() {
	// 			const updateUser = await updateTweets({
	// 				id,
	// 				following: data,
	// 				followers: count,
	// 			});

	// 			setUsers((prev) =>
	// 				prev.map((user) => (user.id === id ? updateUser : user))
	// 			);
	// 		})();
	// 	} else {
	// 		const data = [...user.following].splice(indx);

	// 		const count = user.followers - 1;

	// 		(async function updateUsers() {
	// 			const updateUser = await updateTweets({
	// 				id,
	// 				following: data,
	// 				followers: count,
	// 			});

	// 			setUsers((prev) =>
	// 				prev.map((user) => (user.id === id ? updateUser : user))
	// 			);
	// 		})();
	// 	}
	// };

	const handleClick = (id) => {
		const { following, followers } = users.find((item) => item.id === id);

		const data = !following;
		const count = following ? followers - 1 : followers + 1;

		(async function updateUsers() {
			const updateUser = await updateTweets({
				id,
				following: data,
				followers: count,
			});

			setUsers((prev) =>
				prev.map((user) => (user.id === id ? updateUser : user))
			);
			(async function fetchAllUsers() {
				const payload = await fetchAllTweets(filter !== null ? filter : null);

				const countPage = Math.round(Number(payload.length) / 12);
				setNumbPage(countPage);
			})();
			(async function fetchUsers() {
				const payload = await fetchTweets(
					page,
					filter !== null ? filter : null
				);

				setUsers(payload);
			})();
		})();
	};

	const handleFilterChange = (event) => {
		localStorage.setItem("page", JSON.stringify(1));
		setFilterValue(event.target.value);

		switch (event.target.value) {
			case "follow":
				setFilter(false);
				break;
			case "following":
				setFilter(true);
				break;
			default:
				setFilter(null);
				break;
		}
	};
	// const filteredTweets = (data) => {
	// 	switch (data) {
	// 		case "follow":
	// 			const followData = usersFilter.filter(
	// 				(user) => user.following.length === 0
	// 			);
	// 			const countPageFollowData = Math.round(Number(followData.length) / 12);
	// 			setNumbPage(countPageFollowData);
	// 			return setUsers(followData);
	// 		case "following":
	// 			const followingData = usersFilter.filter(
	// 				(user) => user.following.length > 0
	// 			);
	// 			const countPageFollowingData = Math.round(
	// 				Number(followingData.length) / 12
	// 			);
	// 			setNumbPage(countPageFollowingData);
	// 			return setUsers(followingData);
	// 		default:
	// 			return setUsers(fetchTweets(1));
	// 	}
	// };

	return (
		<Container>
			<Helmet>
				<title>Tweets</title>
			</Helmet>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					paddingTop: "15px",
				}}
			>
				<BtnBack type="button" onClick={() => navigate(linkToBack)}>
					<ArrowBackSharpIcon />
					<span style={{ marginLeft: "4px" }}>Go Back</span>
				</BtnBack>
				<Box sx={{}}>
					<StyledLabel htmlFor="filter">Filter by:</StyledLabel>
					<StyledSelect
						id="filter"
						value={filterValue}
						onChange={handleFilterChange}
						defaultValue={"show all"}
					>
						<option value="show all">Show all</option>
						<option value="follow">Follow</option>
						<option value="following">Following</option>
					</StyledSelect>
				</Box>
			</Box>
			{/* <SelectSmall filteredTweets={handleFilterChange} /> */}

			{users && <TweetsList users={users} handleClick={handleClick} />}
			{/* <ToTopButton /> */}
			{users.length > 0 && (
				<PaginationRounded
					onChange={handlePageChange}
					numbPage={numbPage}
					page={page}
				/>
			)}
		</Container>
	);
}
