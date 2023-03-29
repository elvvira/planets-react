import styled from 'styled-components';

const StyledHeader = styled.header`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 1rem;
	padding-right: 1rem;
	color: white;
	margin-bottom: 2rem;
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: #ffffff;
		opacity: 0.2;
		left: 0;
		bottom: 0;
	}
`;
const Icon = styled.img`
	opacity: 0.3;
`;
const StyledH1 = styled.h1`
	font-family: antonio;
	font-size: 28px;
`;
export { StyledHeader, StyledH1, Icon };
