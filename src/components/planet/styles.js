import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ContainerPlanet = styled.div`
	position: relative;
	height: 70px;
	width: 90%;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	align-items: center;
	gap: 1rem;
	justify-content: center;

	&:not(:last-child) {
		border-bottom: 1px solid rgba(151, 151, 151, 0.5);
	}
	&--show {
		transform: translateX(400px);
	}
`;

const StyledLink = styled(NavLink)`
	font-family: 'League Spartan';
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
export { StyledBall, ContainerPlanet, StyledLink };
