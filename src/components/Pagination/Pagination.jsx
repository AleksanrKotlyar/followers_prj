import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded({ onChange, numbPage }) {
	return (
		<Stack spacing={2} style={{ alignItems: "center", margin: "30px 0" }}>
			<Pagination
				count={numbPage}
				onChange={onChange}
				variant="outlined"
				shape="rounded"
				size="large"
				color="secondary"
				showFirstButton
				showLastButton
			/>
		</Stack>
	);
}
