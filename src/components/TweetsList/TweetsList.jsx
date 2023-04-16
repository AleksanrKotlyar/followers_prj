import Container from "components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { updateTweets } from "redux/tweetsOperations";
import { useNavigate } from "react-router-dom";
// import { useLocation, Link } from "react-router-dom";

import {
	TweetsUl,
	Card,
	Avatar,
	AvatarImg,
	Tweets,
	Followers,
	Btn,
	BtnBack,
} from "./TweetsList.styled";
import { getTweets } from "redux/selectors";

export const TweetsList = () => {
	const users = useSelector(getTweets);
	// const [users, setUsers] = useState([]);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// const filter = useSelector(getFilter);

	// const normFilter = filter.toLocaleLowerCase();
	// const renderContactsList = contacts.filter((contact) =>
	// 	contact.name.toLocaleLowerCase().includes(normFilter)
	// let following = [];

	// const location = useLocation();

	// const backLink = location.state?.from ?? "/";

	function followerFormat(data) {
		return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	function checkFollowing(id, following) {
		return [...following].includes(id) ? true : false;
	}

	const handleClick = (id) => {
		const user = users.find((item) => item.id === id);
		const indx = user.following.includes(id);

		if (!indx) {
			const data = [...user.following, id];
			const count = user.followers + 1;
			dispatch(
				updateTweets({
					id,
					following: data,
					followers: count,
				})
			);
		} else {
			const data = [...user.following].splice(indx);
			const count = user.followers - 1;
			dispatch(
				updateTweets({
					id,
					following: data,
					followers: count,
				})
			);
		}
	};

	return (
		<Container>
			<BtnBack type="button" onClick={() => navigate("/")}>
				Go Back
			</BtnBack>
			{users.length > 0 ? (
				<TweetsUl>
					{users?.map(({ id, user, tweets, followers, avatar, following }) => (
						<Card key={id}>
							<Avatar>
								<AvatarImg>
									<img src={avatar} alt={user} />
								</AvatarImg>
							</Avatar>
							<Tweets>{tweets} tweets</Tweets>
							<Followers>{followerFormat(followers)} followers</Followers>
							<Btn
								type="button"
								style={{
									backgroundColor: checkFollowing(id, following)
										? "#5CD3A8"
										: "#EBD8FF",
								}}
								onClick={() => handleClick(id)}
							>
								{checkFollowing(id, following) ? "following" : "follow"}
							</Btn>
						</Card>
					))}
				</TweetsUl>
			) : (
				<p style={{ margin: "0 auto" }}>No contacts find</p>
			)}
		</Container>
	);
};
