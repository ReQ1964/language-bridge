import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const NextImage = styled(Image)`
	cursor: pointer;
`;

const UnorderedList = styled.ul<{ isOpen?: boolean }>`
	position: fixed;
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	width: 100%;
	transition: 0.5s;
	transform: translateY(${(props) => (props.isOpen ? '0%' : '-120%')});
`;

const NextLink = styled(Link)`
	text-decoration: none;
	color: black;
	font-size: 1.5rem;
	transition: border 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

	&:hover {
		color: black;
		border-bottom: 1px solid black;
	}
`;

export default { NextImage, UnorderedList, NextLink };
