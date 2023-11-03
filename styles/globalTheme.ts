interface DefaultTheme {
	colors: {
		text: {
			primary: string;
			secondary: string;
			tertiary: string;
		};
	};
}

const globalTheme: DefaultTheme = {
	colors: {
		text: {
			primary: 'black',
			secondary: 'white',
			tertiary: '#2563eb',
		},
	},
};

export default globalTheme;
