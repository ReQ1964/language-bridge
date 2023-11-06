import { ThemeProvider } from 'styled-components';
import globalTheme from '@/theme/globalTheme';
import { ConfigProvider } from 'antd';
import antdTheme from './antdTheme';
import { ReactNode } from 'react';

function ThemesProvider({ children }: { children: ReactNode }) {
	return (
		<ConfigProvider theme={antdTheme}>
			<ThemeProvider theme={globalTheme}>{children}</ThemeProvider>
		</ConfigProvider>
	);
}

export default ThemesProvider;
