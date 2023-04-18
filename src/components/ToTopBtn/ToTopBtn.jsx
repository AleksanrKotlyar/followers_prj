import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ToTopBtn } from "./ToTopBtn.styled";

export const ToTopButton = () => {
	const onTopMove = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<ToTopBtn
			onClick={onTopMove}
			aria-label="move to top"
			size="large"
			backgroundColor="secondary"
			background="violet"
			color="secondary"
			sx={{
				position: "fixed",
				bgcolor: "#f299f4",
				boxShadow: 1,
				"&:hover": {
					color: "#972e99",
					backgroundColor: "#f285f4",
				},
			}}
		>
			<UpIcon />
		</ToTopBtn>
	);
};
