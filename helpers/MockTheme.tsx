import { ThemeProvider } from 'styled-components';
import globalTheme from '@/styles/globalTheme';

function MockTheme({ children }: any) {
	return <ThemeProvider theme={globalTheme}>{children}</ThemeProvider>;
}

export default MockTheme;
