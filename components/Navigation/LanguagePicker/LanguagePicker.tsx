import type { MenuProps } from 'antd';
import Image from 'next/image';
import { Dropdown } from 'antd';
import gb_icon from '@/public/icons/flags/gb.svg';
import es_icon from '@/public/icons/flags/es.svg';
import show_more_icon from '@/public/icons/navigation/menu_show_more.svg';
import S from './LanguagePicker.style';

const items: MenuProps['items'] = [
	{
		key: '1',
		label: (
			<S.DropdownContainer>
				<Image
					src={gb_icon}
					width={24}
					height={24}
					alt="Flag of the United Kingdom"
				/>
				<p>ENG</p>
			</S.DropdownContainer>
		),
	},
	{
		key: '2',
		label: (
			<S.DropdownContainer>
				<Image src={es_icon} width={24} height={24} alt="Flag of Spain" />
				<p>SPA</p>
			</S.DropdownContainer>
		),
	},
];

const LanguagePicker = () => (
	<Dropdown menu={{ items }} placement="bottom">
		<S.DropdownButton>
			<Image
				src={gb_icon}
				width={25}
				height={25}
				alt="Flag of the United Kingdom"
			/>
			<Image
				src={show_more_icon}
				width={25}
				height={25}
				alt="Click to show languages to choose"
			/>
		</S.DropdownButton>
	</Dropdown>
);

export default LanguagePicker;
