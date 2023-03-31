import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
	overflow: hidden;
`;
const ContainerPlanet = styled.ul`
	left: ${({ open }) => (open ? '0px' : '700px')};
	position: absolute;
	background-color: #070724;
	top: 70px;

	width: 100%;
	height: 100vh;
	padding-right: 2rem;
	padding-left: 3rem;
	margin-right: auto;
	margin-left: auto;
	transition-duration: 0.5s;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	z-index: 1;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		left: 0;
		top: 70px;
		height: 20px;
	}
	@media screen and (min-width: 1040px) {
		width: 665px;
		top: -20px;
		right: -700px;
	}
`;
const StyledLi = styled.li`
	width: 95%;
	height: 70px;
	gap: 1rem;
	align-items: center;
	display: flex;
	justify-content: space-between;

	&:not(:last-child) {
		border-bottom: 1px solid rgba(151, 151, 151, 0.5);
		@media screen and (min-width: 768px) {
			border-bottom: transparent;
			width: 665px;
		}
	}
`;

const StyledLink = styled(NavLink)`
	position: relative;
	font-family: 'League Spartan';
	text-decoration: none;
	font-style: normal;
	width: 60px;
	color: rgba(151, 151, 151, 0.5);
	font-weight: 700;
	font-size: 15px;
	letter-spacing: 1.36364px;
	padding-left: 2.5rem;
	margin-right: 55%;
	&.active {
		color: white;
	}
	@media screen and (min-width: 768px) {
		padding-left: 0rem;
		width: 50px;
		margin-right: 1rem;
		font-size: 11px;
	}
	@media screen and (min-width: 1040px) {
		width: 1300%;
		bottom: -10px;
	}
	&::after {
		content: '';
		position: absolute;
		width: 20px;
		height: 20px;
		border-radius: 3rem;
		background: rgba(151, 151, 151, 0.5);
		left: 0;
		top: -5px;
		display: block;
		@media screen and (min-width: 768px) {
			display: none;
		}
	}
	&.active::after {
		background-color: ${({ color }) => color};
	}
`;
// const StyledBall = styled.div`
// 	display: block;
// 	width: 20px;
// 	height: 20px;
// 	border-radius: 3rem;
// 	background: rgba(151, 151, 151, 0.5);
// 	background-color: ${({ color }) => color};
// 	@media screen and (min-width: 768px) {
// 		display: none;
// 	}
// `;

const Arrow = styled.img`
	display: block;
	@media screen and (min-width: 768px) {
		display: none;
	}
`;
export { Nav, ContainerPlanet, StyledLink, StyledLi, Arrow };
