import Container from "components/Container/Container";
import { Navigation } from "../Navigation/Navigation";
// import { useAuth } from "hooks";
import { Header } from "./AppBar.styled";

export const AppBar = () => {
	// const { isLoggedIn } = useAuth();

	return (
		<Container>
			<Header>
				<Navigation />
			</Header>
		</Container>
	);
};
