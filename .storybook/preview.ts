// .storybook/preview.js
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { createGlobalStyle } from 'styled-components';
import '@/styles/globals.scss';
import '@/styles/variables.scss';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

export const decorators = [
	withThemeFromJSXProvider({
		GlobalStyles, // Adds your GlobalStyle component to all stories
	}),
];
