import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const NextImage = styled(Image)`
	cursor: pointer;
	margin-top: 5px;
`;

const UnorderedList = styled.ul<{ isOpen?: boolean }>`
	position: fixed;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	list-style: none;
	background-color: white;
	z-index: -1;
	transition: 0.5s;
	transform: translate(-50%, ${(props) => (props.isOpen ? '20%' : '-170%')});
`;

const NextLink = styled(Link)`
	font-size: 1.3rem;
	transition: border 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

	&:hover {
		color: black;
		border-bottom: 1px solid black;
	}
`;

export default { NextImage, UnorderedList, NextLink };
