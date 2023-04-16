import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import {
	fetchTweets,
	fetchAllTweets,
	updateTweets,
} from "redux/tweetsOperations";
import { TweetsList } from "components/TweetsList/TweetsList";
import PaginationRounded from "components/Pagination/Pagination";
import { IsLoading } from "redux/selectors";
import { ToTopButton } from "components/ToTopBtn/ToTopBtn";

export default function Tweets() {
	const [page, setPage] = useState(1);
	const [users, setUsers] = useState([]);
	const [numbPage, setNumbPage] = useState(1);
	const dispatch = useDispatch();

	useEffect(() => {
		// if(users.prefState!==users)
		(async function fetchAllUsers() {
			const { payload } = await dispatch(fetchAllTweets(page));
			const countPage = Math.round(Number(payload.length) / 12);
			setNumbPage(countPage);
		})();
		(async function fetchUsers() {
			const { payload } = await dispatch(fetchTweets(page));
			setUsers(payload);
		})();
	}, [dispatch, page, users.length]);

	// useEffect(() => {}, [users]);

	const handlePageChange = (e, p) => {
		setPage(p);

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

	// 		setUsers(
	// 			dispatch(
	// 				updateTweets({
	// 					id,
	// 					following: data,
	// 					followers: count,
	// 				})
	// 			)
	// 		);
	// 		// (async function fetchUsers() {
	// 		// 	const { payload } = await dispatch(fetchTweets(page));
	// 		// 	setUsers(payload);
	// 		// })();
	// 	} else {
	// 		const data = [...user.following].splice(indx);
	// 		const count = user.followers - 1;

	// 		setUsers(
	// 			dispatch(
	// 				updateTweets({
	// 					id,
	// 					following: data,
	// 					followers: count,
	// 				})
	// 			)
	// 		);
	// 	}
	// 	// (async function fetchUsers() {
	// 	// 	const { payload } = await dispatch(fetchTweets(page));
	// 	// 	setUsers(payload);
	// 	// })();
	// };

	return (
		<>
			<Helmet>
				<title>Tweets</title>
			</Helmet>
			{users && <TweetsList users={users} />}
			<ToTopButton />
			{users && IsLoading && (
				<PaginationRounded onChange={handlePageChange} numbPage={numbPage} />
			)}
		</>
	);
}
