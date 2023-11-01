import styled from 'styled-components';
import Link from 'next/link';

const UnorderedList = styled.ul<{ isOpen?: boolean }>`
	position: fixed;
	top: 0;
	display: flex;
	flex-direction: column;
	left: 0%;
	text-align: center;
	list-style: none;
	background-color: white;
	width: 100%;
	z-index: 1;
	transition: 0.8s;
	transform: translateY(${(props) => (props.isOpen ? '28%' : '-170%')});
`;

const NextLink = styled(Link)`
	font-size: 1.3rem;
	transition: border 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

	&:hover {
		color: black;
		border-bottom: 1px solid black;
	}
`;

const ListItem = styled.li`
	padding: 0.7rem 0;
`;

export default { UnorderedList, NextLink, ListItem };
