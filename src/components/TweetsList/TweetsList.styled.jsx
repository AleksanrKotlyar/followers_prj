import styled from "styled-components";
import { theme } from "../../utils/theme";

import logo from "../../images/logo.png";
import bg from "../../images/bg.png";

export const TweetsUl = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 15px 0;

	gap: 8px;

	${theme.mq.desktop} {
		gap: 16px;
	}
`;
export const Card = styled.li`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: column;

	width: 380px;
	height: 460px;

	background: url(${logo}), url(${bg}),
		linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
	background-position: left 20px top 20px, left 36px top 28px, left 0 top 0;
	background-repeat: no-repeat, no-repeat, no-repeat;

	box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
	border-radius: 20px;
`;
export const Avatar = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	margin-bottom: 26px;
	width: 100%;

	&:before {
		content: "";
		position: absolute;
		width: 100%;
		left: 0;
		top: 50%;
		height: 8px;
		transform: translate(0, -50%);
		background: #ebd8ff;
		box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
			inset 0px -1.71846px 3.43693px #ae7be3,
			inset 0px 3.43693px 2.5777px #fbf8ff;
	}
`;
export const AvatarImg = styled.div`
	position: relative;

	height: 80px;
	width: 80px;
	overflow: hidden;

	border: 8px solid transparent;
	border-radius: 50%;

	background: #ebd8ff;
	box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
		inset 0px -2.19582px 4.39163px #ae7be3,
		inset 0px 4.39163px 3.29372px #fbf8ff;

	z-index: 1;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export const Tweets = styled.p`
	margin-bottom: 16px;
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	text-transform: uppercase;

	color: #ebd8ff;
`;
export const Followers = styled.p`
	margin-bottom: 26px;
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	text-transform: uppercase;

	color: #ebd8ff;
`;
export const Btn = styled.button`
	padding: 14px 56px;
	margin-bottom: 36px;

	font-weight: 600;
	font-size: 18px;
	text-transform: uppercase;
	color: #373737;

	background: #ebd8ff;
	box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
	border-radius: 10.3108px;
	transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const BtnBack = styled.button`
	padding: 14px 28px;
	margin-top: 15px;

	font-weight: 600;
	font-size: 18px;
	text-transform: uppercase;
	color: #373737;

	background: #37ce97;
	box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
	border-radius: 10.3108px;
	transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;
