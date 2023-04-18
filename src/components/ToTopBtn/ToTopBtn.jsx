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
			color="secondary"
		>
			<UpIcon />
		</ToTopBtn>
	);
};
