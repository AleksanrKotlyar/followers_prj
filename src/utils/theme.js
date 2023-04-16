export const breakpoints = {
	mob: "320",
	tab: "768",
	desk: "1280",
};

export const theme = Object.freeze({
	colors: {
		white: "#fff",
		cardAccent: "#facfcf",
		text: "#575555",
		textDark: "black",
		tableHeader: "#009698",
		tableBgAccent: "#ebffff",
		body: "#edf5fc",
		inputColor: "#2270593d",
		mainBg: "#9ec69a87",
		colorTitle: "rgb(96 45 214)",
		colorInteract: "#9aec3d4d",
		accent: "#2196F3",
		gray: "#9e9e9e",
		light: "#f2f2f2",
		dark: "#212121",
		primary: "#49a09d",
		mainBackground: ["linear-gradient(to top, #abbaab, #fff)"],
	},
	space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
	fontSizes: {
		xs: 12,
		s: 14,
		m: 16,
		l: 32,
		xl: 64,
	},
	fontWeigth: { normal: 500, bold: 700 },
	borders: {
		none: "none",
		normal: "1px solid",
	},
	radii: {
		none: "0",
		normal: "4px",
		round: "50px",
	},
	shadows: {
		base: "0px 5px 15px rgba(0, 0, 0, 0.75)",
		input: " 3px 5px 10px -2px rgb(75 92 165 / 50%)",
		small: "0 5px 7px -1px rgba(51, 51, 51, 0.23)",
		regular: "0px 4px 10px 4px #212d2a3c",
		medium: "0 9px 47px 11px rgba(51, 51, 51, 0.18);",
	},
	animation: {
		cubicBezier: "0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)",
	},

	transitions: {
		durations: {
			default: "250ms",
		},
		functions: {
			default: "cubic-bezier(0.4, 0, 0.2, 1)",
		},
	},

	//mediaQueries
	mq: {
		mobileOnly: `@media screen and (max-width: ${breakpoints.tab - 0.02}px)`,
		mobile: `@media screen and (min-width: ${breakpoints.mob}px)`,
		tabletOnly: `@media screen and (min-width: ${
			breakpoints.tab
		}px) and (max-width: ${breakpoints.desk - 0.02}px)`,
		tablet: `@media screen and (min-width: ${breakpoints.tab}px)`,
		notDesktop: `@media screen and (max-width: ${breakpoints.desk - 0.02}px)`,
		desktop: `@media screen and (min-width: ${breakpoints.desk}px)`,
	},
});
