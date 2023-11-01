import styled from 'styled-components';
import Image from 'next/image';

const Navbar = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: relative;
	background-color: white;
	padding: 0.8rem 0.1rem;
`;

const RightContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.4rem;
`;

const AccountIcon = styled(Image)`
	cursor: pointer;
`;

export default { Navbar, RightContainer, AccountIcon };
