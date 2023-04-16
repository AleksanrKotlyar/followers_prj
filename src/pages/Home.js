import "animate.css";

const styles = {
	container: {
		minHeight: "calc(100vh - 60px)",
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontWeight: 500,
		fontSize: 48,
		textAlign: "center",
	},
};

export default function Home() {
	return (
		<div style={styles.container}>
			<h1
				className="animate__animated  animate__backInDown"
				style={styles.title}
			>
				Welcome, User!
			</h1>
			<p className="animate__animated  animate__bounceInUp">
				In this application you can subscribe to interesting people for you,
				enjoy!
			</p>
		</div>
	);
}
