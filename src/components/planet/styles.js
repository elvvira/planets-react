import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// const Nav = styled.nav`
// 	transform: ${({ open }) => (open ? 'translateX(0px)' : 'translateX(400px)')};
// 	transform: translateX(0px);
// 	&--close {
// 		transform: translateX(400px);
// 	}
// `;
const ContainerPlanet = styled.ul`
	left: ${({ open }) => (open ? '0px' : '500px')};
	position: relative;
	width: 85%;
	margin-right: auto;
	margin-left: auto;
`;
const StyledLi = styled.li`
	height: 70px;
	gap: 1rem;
	align-items: center;
	&:not(:last-child) {
		border-bottom: 1px solid rgba(151, 151, 151, 0.5);
	}
`;

const StyledLink = styled(NavLink)`
	font-family: 'League Spartan';
	text-decoration: none;
	font-style: normal;
	width: 60px;
	color: rgba(151, 151, 151, 0.5);
	font-weight: 700;
	font-size: 15px;
	letter-spacing: 1.36364px;
	margin-right: 12rem;
`;
const StyledBall = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 3rem;
	background: rgba(151, 151, 151, 0.5);
`;
export { StyledBall, ContainerPlanet, StyledLink, StyledLi };
