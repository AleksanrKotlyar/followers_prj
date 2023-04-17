import Container from "components/Container/Container";
import { Navigation } from "components/Navigation/Navigation";
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
