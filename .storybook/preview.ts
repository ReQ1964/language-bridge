// .storybook/preview.js
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import '@/styles/globals.scss';
import globalThemes from '../styles/globalTheme';

export const decorators = [
	withThemeFromJSXProvider({
		themes: {
			global: globalThemes,
		},
		defaultTheme: 'global',
		Provider: ThemeProvider,
	}),
];
