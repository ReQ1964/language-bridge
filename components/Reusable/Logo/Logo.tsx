import React from 'react';
import Link from 'next/link';
import S from './Logo.styles';

const Logo = () => {
	return (
		<Link href="/">
			<S.H3>Language Bridge</S.H3>
		</Link>
	);
};

export default Logo;
