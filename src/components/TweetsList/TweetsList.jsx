import Container from "components/Container/Container";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";

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
import { WrapSpinner } from "components/Layout/Layout.styled";
import { Circles } from "react-loader-spinner";

export const TweetsList = ({ users, handleClick }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const linkToBack = location.state?.from ?? "/";

	function followerFormat(data) {
		return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	function checkFollowing(id, following) {
		return [...following].includes(id) ? true : false;
	}

	return (
		<Container>
			<BtnBack type="button" onClick={() => navigate(linkToBack)}>
				<ArrowBackSharpIcon />
				<span style={{ marginLeft: "4px" }}>Go Back</span>
			</BtnBack>
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
									backgroundColor: checkFollowing(id, following)
										? "#5CD3A8"
										: "",
								}}
								onClick={() => handleClick(id)}
							>
								{checkFollowing(id, following) ? "following" : "follow"}
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
