import {createTheme} from '@mui/material/styles';

export function getCssVariable(variable: string): string {
	return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: true;
		sm: true;
		md: true;
		lg: true;
		xl: true;
		xxl: true;
		xxxl: true;
	}
}

// A custom theme for this app
const theme = createTheme({
	cssVariables: true,
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
			xxl: 1920,
			xxxl: 2200,
		},
	},
	palette: {
		primary: {
			// Removed getCssVariable('--primary-color') and replaced with a color for testing
			main: '#153d77'
		}
	}
});

export default theme;
