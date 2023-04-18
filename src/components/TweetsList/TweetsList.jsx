import Container from "components/Container/Container";
import {
	TweetsUl,
	Card,
	Avatar,
	AvatarImg,
	Tweets,
	Followers,
	Btn,
} from "./TweetsList.styled";
import { WrapSpinner } from "components/Layout/Layout.styled";
import { Circles } from "react-loader-spinner";

export const TweetsList = ({ users, handleClick }) => {
	function followerFormat(data) {
		return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	return (
		<Container>
			{users?.length > 0 ? (
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
									backgroundColor: following ? "#5CD3A8" : "",
								}}
								onClick={() => handleClick(id)}
							>
								{following ? "following" : "follow"}
							</Btn>
						</Card>
					))}
				</TweetsUl>
			) : (
				<WrapSpinner>
					<Circles
						height="100"
						width="100"
						color="rgb(96 45 214)"
						ariaLabel="circles-loading"
						wrapperStyle={{}}
						wrapperClass=""
						visible={true}
					/>
				</WrapSpinner>
			)}
		</Container>
	);
};
