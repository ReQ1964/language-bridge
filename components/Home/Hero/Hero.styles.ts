import styled from 'styled-components';
import Image from 'next/image';
import { Button as AntDButton } from 'antd';

const HeroSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	gap: 1rem;
	padding: 2rem 1rem;
	color: white;
	background-image: linear-gradient(to right, var(--primary-color), #407bff);
`;

const Button = styled(AntDButton)`
	background-color: var(--secondary-color);
	color: white;
	border: none;
	&:hover {
		color: black;
	}
`;

const NextImage = styled(Image)`
	width: 80%;
	height: 80%;
	max-width: 500px;
	max-height: 500px;
`;

export default { HeroSection, Button, NextImage };
