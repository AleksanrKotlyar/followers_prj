import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1170px;

	margin-bottom: 16px;

	padding: 5px;
	margin: 0 auto;

	box-shadow: ${(p) => p.theme.shadows.regular};

	border-bottom-left-radius: ${(p) => p.theme.space[3]}px;
	border-bottom-right-radius: ${(p) => p.theme.space[3]}px;
`;
