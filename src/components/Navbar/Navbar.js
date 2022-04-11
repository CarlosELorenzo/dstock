import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Brand = styled.div`
	//background-color: ${theme.colors.green};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
`;
const BrandText = styled.a`
	font-size: 2rem;
	color: ${theme.colors.blue}c5;
	margin: 0.25em 0.75em;
`;
const LinkText = styled.a`
	font-size: 1.5rem;
	color: ${theme.colors.blue}c5;
	margin: 0em 0em;
`;

const Nav = styled.nav`
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1em 5em;
	background-color: ${theme.colors.grey};
	border-bottom: solid red ${theme.colors.green};
	opacity: 0.99;
`;
const Links = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2em;
`;

const Navbar = () => {
	const pages = ['home', 'about'];
	return (
		<Nav>
			<Brand>
				<Link href={'/'}>
					<BrandText>DeArt</BrandText>
				</Link>
			</Brand>
			<Links>
				{pages.map((link) => (
					<Link href={`/${link == 'home' ? '' : link}`}>
						<LinkText>{link}</LinkText>
					</Link>
				))}
			</Links>
		</Nav>
	);
};

export default Navbar;
