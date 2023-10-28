import React from 'react';
import Link from 'next/link';
import S from './Logo.styles';

const Logo = () => {
	return (
		<Link href="/">
			<S.H1>Language Bridge</S.H1>
		</Link>
	);
};

export default Logo;
