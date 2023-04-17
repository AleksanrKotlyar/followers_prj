import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
	fetchTweets,
	fetchAllTweets,
	updateTweets,
} from "services/API services";
import { TweetsList } from "components/TweetsList/TweetsList";
import PaginationRounded from "components/Pagination/Pagination";
// import { ToTopButton } from "components/ToTopBtn/ToTopBtn";

export default function Tweets() {
	const [page, setPage] = useState(pageFromLS());
	const [users, setUsers] = useState([]);
	const [numbPage, setNumbPage] = useState(1);

	useEffect(() => {
		(async function fetchAllUsers() {
			const payload = await fetchAllTweets(page);

			const countPage = Math.round(Number(payload.length) / 12);
			setNumbPage(countPage);
		})();
		(async function fetchUsers() {
			const payload = await fetchTweets(page);

			setUsers(payload);
		})();
	}, [page]);

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
	const handleClick = (id) => {
		const user = users.find((item) => item.id === id);
		const indx = user.following.includes(id);

		if (!indx) {
			const data = [...user.following, id];
			const count = user.followers + 1;

			(async function updateUsers() {
				const updateUser = await updateTweets({
					id,
					following: data,
					followers: count,
				});

				setUsers((prev) =>
					prev.map((user) => (user.id === id ? updateUser : user))
				);
			})();
		} else {
			const data = [...user.following].splice(indx);

			const count = user.followers - 1;

			(async function updateUsers() {
				const updateUser = await updateTweets({
					id,
					following: data,
					followers: count,
				});

				setUsers((prev) =>
					prev.map((user) => (user.id === id ? updateUser : user))
				);
			})();
		}
	};

	return (
		<>
			<Helmet>
				<title>Tweets</title>
			</Helmet>
			{users && <TweetsList users={users} handleClick={handleClick} />}
			{/* <ToTopButton /> */}
			{users.length > 0 && (
				<PaginationRounded
					onChange={handlePageChange}
					numbPage={numbPage}
					page={page}
				/>
			)}
		</>
	);
}
